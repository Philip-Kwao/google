import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google HomePage',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col flex-1 justify-between`}>
          {children}
          <Footer />
      </body>
    </html>
  )
}
