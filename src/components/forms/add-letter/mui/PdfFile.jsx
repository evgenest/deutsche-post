import MuiAutocomplete from '@/components/mui/MuiAutocomplete'
import supabase from '@/utils/supabase/server'

const { data: files, error } = await supabase.from('files').select('*')
// if (error != null) console.log(error)

export default function PdfFile() {
  return <MuiAutocomplete id="pdf-file" label="PDF File" options={files} />
}
