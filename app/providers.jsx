'use client'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </LocalizationProvider>
  )
}
