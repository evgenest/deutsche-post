import { Inter, Roboto_Mono } from 'next/font/google'

// These styles apply to every route in the application
import './globals.css'

export const metadata = {
  title: 'Deutsche Post App',
  description: 'Makes it easier to interact with a bunch of letters',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
