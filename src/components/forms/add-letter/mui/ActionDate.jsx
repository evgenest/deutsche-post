import { FormControlLabel } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'

export default function ActionDate() {
  return (
    <FormControlLabel
      required
      name="actionDate"
      value={dayjs()}
      control={
        <DatePicker
          format="YYYY-MM-DD"
          label="Action date"
          defaultValue={dayjs()}
          slotProps={{
            textField: {
              helperText:
                'When have received if the letter is incoming or when have sent if the letter is outgoing',
            },
          }}
        />
      }
    />
  )
}
