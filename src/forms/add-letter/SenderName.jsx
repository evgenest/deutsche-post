import MuiAutocomplete from '@/components/mui/MuiAutocomplete'
import supabase from '@/utils/supabase'

const { data: contacts, error } = await supabase.from('contacts').select('*')
// if (error != null) console.log(error)

export default function SenderName() {
  // const id = props.label.toLowerCase().replaceAll(' ', '-')

  return (
    <MuiAutocomplete id="sender-name" label="Sender Name" options={contacts} />
  )
}
