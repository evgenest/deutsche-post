import SelectContacts from '@/components/interface/SelectContacts'
import React from 'react'

export default function RecipientNames() {
  return (
    <SelectContacts
      name={'recipientNames'}
      label={'Recipient Names:'}
      multiple={true}
    ></SelectContacts>
  )
}
