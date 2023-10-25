import SelectContacts from '@/components/interface/SelectContacts'
import DbDataProvider from '@/context/DbDataProvider'
import React from 'react'

export default function SenderName() {
  return (
    <DbDataProvider tableName={'contacts'}>
      <SelectContacts
        name={'senderName'}
        label={'Sender Name:'}
      ></SelectContacts>
    </DbDataProvider>
  )
}
