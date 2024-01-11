import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "LendStack's Wordle",
  description: 'Created by https://github.com/ahmedelbahri',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=''>
          {/* <div>wordle</div> */}
          {children}
        </div>
      </body>
    </html>
  )
}
