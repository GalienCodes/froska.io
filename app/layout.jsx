import Head from 'next/head';
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Froska',
  description: 'The endearing feline companion of Metis CEO Elena',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <Head>
        <title>Froska</title>
        <meta name="description" content="The endearing feline companion of Metis CEO Elena" />
      </Head>
      <body className={`bg-[#FFFFFF] dark:bg-[#2B2F38]`}>
        <NavBar />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
