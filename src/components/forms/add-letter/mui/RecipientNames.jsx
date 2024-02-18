import MuiAutocomplete from '@/components/mui/MuiAutocomplete'
import supabase from '@/utils/supabase/server'

const { data: contacts, error } = await supabase.from('contacts').select('*')
// if (error != null) console.log(error)

export default function RecipientNames() {
  return (
    <MuiAutocomplete
      id="recipient-names"
      label="Recipient Names"
      options={contacts}
    />
  )
}
