'use client'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ThemeProvider } from 'next-themes'
import AnyPage from '@/components/interface/any_page/AnyPage'
import { Button } from '@mui/material'

// const { data: getSessionData, error: getSessionError } =
//   await supabase.auth.getSession()
// console.log(getSessionData.session)
// console.log(getSessionError)

export default function Page() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider attribute="class">
        <AnyPage>
          <Button variant="contained" href="/sign-in">
            Sign in
          </Button>
          <Button variant="contained" href="/add-letter">
            Add Letter
          </Button>
        </AnyPage>
      </ThemeProvider>
    </LocalizationProvider>
  )
}
