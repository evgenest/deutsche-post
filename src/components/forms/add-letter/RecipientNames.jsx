import SelectContacts from '@/components/interface/SelectContacts'
import DbDataProvider from '@/context/DbDataProvider'
import React from 'react'

export default function RecipientNames() {
  return (
    <DbDataProvider tableName={'contacts'}>
      <SelectContacts
        name={'recipientNames'}
        label={'Recipient Names:'}
        multiple={true}
      ></SelectContacts>
    </DbDataProvider>
  )
}
