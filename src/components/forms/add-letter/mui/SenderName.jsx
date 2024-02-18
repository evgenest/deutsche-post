import MuiAutocomplete from '@/components/mui/MuiAutocomplete'
import supabase from '@/utils/supabase/server'
import { FormControlLabel } from '@mui/material'

const { data: contacts, error } = await supabase.from('contacts').select('*')
// console.log(contacts)
// if (error != null) console.log(error)

export default function SenderName() {
  // const id = props.label.toLowerCase().replaceAll(' ', '-')

  return (
    <FormControlLabel
      id="sender-name"
      name="senderName"
      label="Sender Name"
      control={<MuiAutocomplete options={contacts} />}
    />
  )
}
