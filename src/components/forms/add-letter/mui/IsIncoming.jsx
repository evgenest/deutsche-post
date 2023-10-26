import { Checkbox, FormControlLabel } from '@mui/material'
import { Input } from 'postcss'
import { Fragment } from 'react'

export default function IsIncoming() {
  return (
    <Fragment>
      <input type="hidden" name="isIncoming" value="no" />
      {/* <input type="checkbox" name='isIncoming' value='yes' defaultChecked />
      <label htmlFor="isIncoming">Is incoming?</label> */}
      <FormControlLabel
        name="isIncoming"
        value={'yes'}
        control={<Checkbox defaultChecked />}
        label="Is incoming?"
      />
    </Fragment>
  )
}
