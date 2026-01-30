import { createCheckoutSession, stripe } from "@/lib/stripe"
import { router } from "../__internals/router"
import { privateProcedure } from "../procedures"
import { HTTPException } from "hono/http-exception"
import Stripe from "stripe"
import { z } from "zod"
import { db } from "@/db"

export const paymentRouter = router({
  createCheckoutSession: privateProcedure.mutation(async ({ c, ctx }) => {
    const { user } = ctx

    try {
      const session = await createCheckoutSession({
        userEmail: user.email,
        userId: user.id,
      })

      return c.json({ url: session.url })
    } catch (error) {
      console.error("Stripe checkout error:", error)

      // Handle specific Stripe errors
      if (error instanceof Stripe.errors.StripeError) {
        throw new HTTPException(400, {
          message: `Stripe Error: ${error.message}`,
        })
      }

      // Handle missing configuration
      if (error instanceof Error) {
        throw new HTTPException(500, {
          message: error.message,
        })
      }

      throw new HTTPException(500, {
        message: "Failed to create checkout session",
      })
    }
  }),

  // Verify Stripe session and upgrade user (works without webhook)
  verifySession: privateProcedure
    .input(z.object({ sessionId: z.string() }))
    .mutation(async ({ c, ctx, input }) => {
      const { user } = ctx
      const { sessionId } = input

      try {
        // Retrieve the session from Stripe
        const session = await stripe.checkout.sessions.retrieve(sessionId)

        // Verify the payment was successful
        if (session.payment_status !== "paid") {
          return c.json({ success: false, message: "Payment not completed" })
        }

        // Verify this session belongs to the current user
        if (session.metadata?.userId !== user.id) {
          return c.json({ success: false, message: "Session mismatch" })
        }

        // Update user to PRO
        await db.user.update({
          where: { id: user.id },
          data: { plan: "PRO" },
        })

        return c.json({ success: true, message: "Upgraded to PRO", plan: "PRO" })
      } catch (error) {
        console.error("Session verification error:", error)

        if (error instanceof Stripe.errors.StripeError) {
          throw new HTTPException(400, {
            message: `Stripe Error: ${error.message}`,
          })
        }

        throw new HTTPException(500, {
          message: "Failed to verify payment session",
        })
      }
    }),

  getUserPlan: privateProcedure.query(async ({ c, ctx }) => {
    const { user } = ctx
    return c.json({ plan: user.plan })
  }),
})