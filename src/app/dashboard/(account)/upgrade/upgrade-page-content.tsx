"use client"

import { Card } from "@/components/ui/card"
import { client } from "@/lib/client"
import { Plan } from "@prisma/client"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { format } from "date-fns"
import { BarChart, CheckCircle, Loader2 } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export const UpgradePageContent = ({ plan: initialPlan }: { plan: Plan }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const queryClient = useQueryClient()
  const [currentPlan, setCurrentPlan] = useState<Plan>(initialPlan)
  const [isVerifying, setIsVerifying] = useState(false)

  // Mutation to verify session and upgrade user
  const { mutate: verifySession } = useMutation({
    mutationFn: async (sessionId: string) => {
      const res = await client.payment.verifySession.$post({ sessionId })
      return await res.json() as { success: boolean; message: string; plan?: string }
    },
    onSuccess: (data) => {
      if (data.success && data.plan === "PRO") {
        setCurrentPlan("PRO")
        toast.success("Welcome to Pro! 🎉", {
          description: "Your account has been upgraded successfully.",
          duration: 5000,
        })
        // Invalidate queries to refresh usage data
        queryClient.invalidateQueries({ queryKey: ["usage"] })
        queryClient.invalidateQueries({ queryKey: ["user-plan"] })
      }
      // Clean up the URL
      router.replace("/dashboard/upgrade")
      setIsVerifying(false)
    },
    onError: () => {
      toast.error("Failed to verify payment. Please contact support.")
      router.replace("/dashboard/upgrade")
      setIsVerifying(false)
    },
  })

  // Verify session when returning from Stripe
  useEffect(() => {
    const sessionId = searchParams.get("session_id")
    const success = searchParams.get("success")
    
    if (success === "true" && sessionId && currentPlan !== "PRO") {
      setIsVerifying(true)
      verifySession(sessionId)
    } else if (success === "true" && currentPlan === "PRO") {
      // Already PRO, just clean up URL
      router.replace("/dashboard/upgrade")
    }
  }, [searchParams, currentPlan, verifySession, router])

  const { mutate: createCheckoutSession } = useMutation({
    mutationFn: async () => {
      const res = await client.payment.createCheckoutSession.$post()
      return await res.json()
    },
    onSuccess: ({ url }) => {
      if (url) router.push(url)
    },
  })

  const { data: usageData } = useQuery({
    queryKey: ["usage"],
    queryFn: async () => {
      const res = await client.project.getUsage.$get()
      return await res.json()
    },
  })

  return (
    <div className="max-w-3xl flex flex-col gap-8">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="mt-2 text-xl/8 font-medium tracking-tight text-zinc-900">
            {currentPlan === "PRO" ? "Plan: Pro" : "Plan: Free"}
          </h1>
          {currentPlan === "PRO" && (
            <CheckCircle className="size-5 text-green-500 mt-2" />
          )}
        </div>
        <p className="text-sm/6 text-gray-600 dark:text-zinc-700 max-w-prose">
          {currentPlan === "PRO"
            ? "Thank you for supporting PingAlert. Find your increased usage limits below."
            : "Get access to more events, categories and premium support."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-2 border-brand-700">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <p className="text-sm/6 font-medium dark:text-zinc-700">Total Events</p>
            <BarChart className="size-4 text-muted-foreground dark:text-zinc-500" />
          </div>

          <div>
            <p className="text-2xl font-bold dark:text-zinc-950">
              {usageData?.eventsUsed || 0} of{" "}
              {usageData?.eventsLimit.toLocaleString() || 100}
            </p>
            <p className="text-xs/5 text-muted-foreground dark:text-zinc-500">
              Events this period
            </p>
          </div>
        </Card>
        <Card>
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <p className="text-sm/6 font-medium dark:text-zinc-700">Event Categories</p>
            <BarChart className="size-4 text-muted-foreground dark:text-zinc-500" />
          </div>

          <div>
            <p className="text-2xl font-bold dark:text-zinc-950">
              {usageData?.categoriesUsed || 0} of{" "}
              {usageData?.categoriesLimit.toLocaleString() || 10}
            </p>
            <p className="text-xs/5 text-muted-foreground dark:text-zinc-500">Active categories</p>
          </div>
        </Card>
      </div>

      <p className="text-sm text-gray-500">
        Usage will reset{" "}
        {usageData?.resetDate ? (
          format(usageData.resetDate, "MMM d, yyyy")
        ) : (
          <span className="animate-pulse w-8 h-4 bg-gray-200"></span>
        )}
        {currentPlan !== "PRO" ? (
          <span
            onClick={() => createCheckoutSession()}
            className="inline cursor-pointer underline text-brand-600"
          >
            {" "}
            or upgrade now to increase your limit &rarr;
          </span>
        ) : null}
      </p>
    </div>
  )
}

