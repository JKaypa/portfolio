import type { Metadata } from 'next'
import Script from 'next/script'
import { Oswald, Open_Sans } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  weight: '500',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '500',
  variable: '--open-sans',
})

export const metadata: Metadata = {
  title: 'Jose Kaypa',
  description: "Jose Kaypa's portfolio",
  other: {
    preconnect: 'https://challenges.cloudflare.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} ${openSans.variable}`}>
        {children}
        <Toaster
          toastOptions={{
            style: {
              background: '#222',
              color: '#fff',
            },
          }}
        />
        <Script src={'https://challenges.cloudflare.com/turnstile/v0/api.js'} async defer />
      </body>
    </html>
  )
}
