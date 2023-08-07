import ToggleTheme from '@/components/ToggleTheme'
import { Button } from '@mui/material'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function AnyPage({ children }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <ToggleTheme />
      {children}
    </main>
  )
}
