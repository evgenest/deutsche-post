import ToggleTheme from '@/components/interface/ToggleTheme'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function AnyPage({ children }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 justify-start gap-2 ${inter.className}`}
    >
      <ToggleTheme />
      {children}
    </main>
  )
}
