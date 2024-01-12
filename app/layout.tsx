import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Froska',
  description: 'The endearing feline companion of Metis CEO Elena',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-[#FFFFFF] dark:bg-[#2B2F38]`}>
        <NavBar />
        {children}</body>
    </html>
  )
}
