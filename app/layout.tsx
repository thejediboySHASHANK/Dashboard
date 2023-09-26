import './globals.css'
import type { Metadata } from 'next'
import {Montserrat} from "@next/font/google";
import Providers from "@/components/Providers";
import {UserContextProvider} from "@/context/UserContext";

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
      <body className={font.className}>
      <UserContextProvider>
          <Providers>
              {children}
          </Providers>
      </UserContextProvider>
      </body>
    </html>
  )
}
