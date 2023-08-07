import AnyPage from '@/components/AnyPage'
import { Button } from '@mui/material'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <AnyPage>
      <Button variant="contained" href="/add-letter">
        Add Letter
      </Button>
    </AnyPage>
  )
}
