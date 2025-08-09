import './globals.css'
import type { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata = {
  title: 'Developer Portfolio',
  description: 'Portfolio built with Cosmic'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <body>
        <Header />
        <main className="max-w-5xl mx-auto px-6 py-8">{children}</main>
        <Footer />
        {/* Pass bucket slug from server to client badge */}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}