'use client'

import { useEffect } from 'react'

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold">Something went wrong</h2>
      <p className="mt-2 text-gray-600">An unexpected error occurred. Try refreshing the page.</p>
    </div>
  )
}