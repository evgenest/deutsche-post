import AnyPage from '@/components/interface/any_page/AnyPage'
import supabase from '@/db/supabase'
import { Button } from '@mui/material'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const { data: getSessionData, error: getSessionError } =
  await supabase.auth.getSession()

console.log(getSessionData.session)
console.log(getSessionError)

export default function Home() {
  return (
    <AnyPage>
      <Button variant="contained" href="/sign-in">
        Sign in
      </Button>
      <Button variant="contained" href="/add-letter">
        Add Letter
      </Button>
    </AnyPage>
  )
}
