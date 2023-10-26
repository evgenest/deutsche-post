import AnyPage from '@/components/interface/any_page/AnyPage'
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
