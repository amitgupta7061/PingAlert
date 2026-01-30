"use client"

import { client } from '@/lib/client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { Modal } from './ui/model'
import { LoadingSpinner } from './loading-spinner'
import { Button } from './ui/button'
import { CheckIcon, AlertCircle } from 'lucide-react'

export const PaymentSuccessModal = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const [isOpen, setIsOpen] = useState(true)
  const [showTimeout, setShowTimeout] = useState(false)

  // Show timeout message after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTimeout(true)
    }, 15000)
    return () => clearTimeout(timer)
  }, [])

  const { data, isPending } = useQuery({
    queryKey: ["user-plan"],
    queryFn: async () => {
      const res = await client.payment.getUserPlan.$get()
      return await res.json()
    },
    refetchInterval: (query) => {
      return query.state.data?.plan === "PRO" ? false : 1000
    },
  })

  const handleClose = () => {
    setIsOpen(false)
    router.push("/dashboard")
  }

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: ["user-plan"] })
    window.location.reload()
  }

  const isPaymentSuccessful = data?.plan === "PRO"

  return (
    <Modal
      showModal={isOpen}
      setShowModal={setIsOpen}
      onClose={handleClose}
      className='px-6 pt-6'
      preventDefaultClose={!isPaymentSuccessful && !showTimeout}
    >
      <div className='flex flex-col items-center'>
        {isPending || !isPaymentSuccessful ? (
          <div className='flex flex-col items-center justify-center h-64'>
            {!showTimeout ? (
              <>
                <LoadingSpinner />
                <p className='text-lg/7 font-medium text-gray-900'>
                  Upgrading your account...
                </p>
                <p className='text-gray-600 text-sm/6 mt-2 text-center text-pretty'>
                  Please wait while we process your upgrade. This may take a moment.
                </p>
              </>
            ) : (
              <>
                <AlertCircle className='size-12 text-amber-500 mb-4' />
                <p className='text-lg/7 font-medium text-gray-900'>
                  Taking longer than expected
                </p>
                <p className='text-gray-600 text-sm/6 mt-2 text-center text-pretty'>
                  Your payment was successful! The upgrade is being processed. 
                  Please refresh or check back in a moment.
                </p>
                <div className='flex gap-3 mt-4'>
                  <Button variant="outline" onClick={handleRefresh}>
                    Refresh
                  </Button>
                  <Button onClick={handleClose}>
                    Go to Dashboard
                  </Button>
                </div>
              </>
            )}
          </div>
        ) : (
          <>
            <div className='relative aspect-video border border-gray-200 w-full overflow-hidden rounded-lg bg-gray-50'>
              <img
                src="/brand-asset-heart.png"
                className='h-full w-full object-cover'
                alt='Payment success'
              />
            </div>

            <div className='mt-6 flex flex-col items-center gap-1 text-center'>
              <p className='text-lg/7 tracking-tight font-medium text-pretty'>
                Upgrade successful! 🎉
              </p>
              <p className='text-gray-600 text-sm/6 text-pretty'>
                Thank you for upgrading to Pro and supporting PingAlert. Your account has been upgraded.
              </p>
            </div>

            <div className='mt-8 w-full'>
              <Button onClick={handleClose} className='h-12 w-full'>
                <CheckIcon className='mr-2 size-5' />
                Go to Dashboard
              </Button>
            </div>
          </>
        )}
      </div>
    </Modal>
  )
}
