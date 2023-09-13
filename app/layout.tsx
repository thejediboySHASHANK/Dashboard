import './globals.css'
import type { Metadata } from 'next'
import {Montserrat} from "@next/font/google";

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Board.',
  description: 'OpeninApp Collaboration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
