import { FormControlLabel } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import React from 'react'

export default function ActionDate() {
  return (
    <FormControlLabel
      required
      control={
        <DatePicker
          format="YYYY-MM-DD"
          label="Action date"
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