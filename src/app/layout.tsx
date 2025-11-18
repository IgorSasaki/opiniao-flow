import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import '../styles/globals.css'

export const metadata = {
  title: 'Opiniao Flow - Plataforma de Pesquisa de Opinião',
  description: 'Plataforma de Pesquisa de Opinião',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)'
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)'
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml'
      }
    ],
    apple: '/apple-icon.png'
  }
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="pt-BR">
    <body className={inter.className}>{children}</body>
  </html>
)

export default RootLayout
