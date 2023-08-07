import { FormGroup } from '@mui/material'
import React from 'react'
import IsIncoming from './IsIncoming'
import ActionDate from './ActionDate'
import SenderName from './SenderName'

export default function FormGroupAddLetter() {
  return (
    <FormGroup>
      <IsIncoming />
      <ActionDate />
      <SenderName />
    </FormGroup>
  )
}
