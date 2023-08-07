import AnyPage from '@/components/AnyPage'
import FormGroupAddLetter from '@/forms/add-letter/FormGroupAddLetter'
import { Button } from '@mui/material'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function AddLetter() {
  // var 1/abc = 'abc'
  return (
    <AnyPage>
      <Button variant="contained" href="/">
        Main Page
      </Button>
      <FormGroupAddLetter />
    </
    AnyPage
    >
  )
}
