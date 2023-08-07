import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'

export default function IsIncoming() {
  return (
    <FormControlLabel
      required
      control={<Checkbox defaultChecked />}
      label="Is incoming?"
    />
  )
}
