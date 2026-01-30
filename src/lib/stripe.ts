import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2024-12-18.acacia",
  typescript: true,
})

export const createCheckoutSession = async ({
  userEmail,
  userId,
}: {
  userEmail: string,
  userId: string
}) => {
  const priceId = process.env.STRIPE_PRICE_ID

  if (!priceId) {
    throw new Error("STRIPE_PRICE_ID is not configured")
  }

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    // Include session_id so we can verify payment directly
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/upgrade?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
    customer_email: userEmail,
    metadata: {
      userId,
    },
  })
  return session
}
