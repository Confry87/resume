import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Daniele Zamboni',
  description: 'Portfolio di Daniele Zamboni - Business & Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
