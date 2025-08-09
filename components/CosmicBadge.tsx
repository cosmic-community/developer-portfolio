'use client'

import { useEffect, useState } from 'react'

export default function CosmicBadge({ bucketSlug }: { bucketSlug: string }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const dismissed = typeof window !== 'undefined' ? localStorage.getItem('cosmic-badge-dismissed') : null
    if (!dismissed) {
      const t = setTimeout(() => setIsVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  if (!isVisible) return null

  const href = `https://www.cosmicjs.com?utm_source=bucket_${bucketSlug}&utm_medium=referral&utm_campaign=app_badge&utm_content=built_with_cosmic`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 no-underline"
      style={{
        width: '180px',
        padding: '12px 16px',
        borderRadius: 8,
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9fafb')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
    >
      <button
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setIsVisible(false)
          localStorage.setItem('cosmic-badge-dismissed', 'true')
        }}
        aria-label="Dismiss badge"
        style={{
          position: 'absolute',
          top: -8,
          right: -8,
          width: 24,
          height: 24,
          background: '#f3f4f6',
          borderRadius: '999px',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700
        }}
      >
        ×
      </button>

      <img
        src="https://cdn.cosmicjs.com/b67de7d0-c810-11ed-b01d-23d7b265c299-logo508x500.svg"
        alt="Cosmic"
        className="w-5 h-5"
        width={20}
        height={20}
      />
      <span style={{ color: '#11171A', fontWeight: 500 }}>Built with Cosmic</span>
    </a>
  )
}