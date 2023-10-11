import AnyPage from '@/components/AnyPage'
import { Button } from '@mui/material'

export default function AnyChildPage({ children }) {
  return (
    <AnyPage>
      <Button variant="contained" href="/">
        Main Page
      </Button>
      {children}
    </AnyPage>
  )
}
