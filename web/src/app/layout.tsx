import type { Metadata } from 'next'

import { SessionProvider } from 'next-auth/react'

import './globals.css'

import { Geist, Geist_Mono } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

import { Providers } from './providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <Header />
          <main className="m-6 flex items-center *:min-h-64 *:min-w-64 lg:m-0 lg:min-h-svh lg:justify-center">
            <Providers>
              {children}
            </Providers>
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}

export const dynamic = 'force-dynamic'
