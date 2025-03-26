import type { ReactNode } from 'react'

import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Providers } from '../components/providers'
import '../styles.css'

type RootLayoutProps = { children: ReactNode }

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData()

  return (
    <div className="font-['Nunito']">
      <meta name="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <Header />
      <main className="m-6 flex items-center *:min-h-64 *:min-w-64 lg:m-0 lg:min-h-svh lg:justify-center">
        <Providers>
          {children}
        </Providers>
      </main>
      <Footer />
    </div>
  )
}

async function getData() {
  const data = {
    description: 'An internet website!',
    icon: '/images/favicon.png',
  }

  return data
}

export async function getConfig() {
  return {
    render: 'static',
  } as const
}
