import ToggleTheme from '@/components/interface/ToggleTheme'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function AnyPage({ children }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start gap-2 p-24 ${inter.className}`}
    >
      <ToggleTheme />
      {children}
    </main>
  )
}
