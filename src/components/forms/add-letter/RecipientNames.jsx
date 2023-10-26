import SelectDbData from '@/components/interface/SelectDbData'
import DbDataProvider from '@/context/DbDataProvider'
import React from 'react'

export default function RecipientNames() {
  return (
    <DbDataProvider tableName={'contacts'}>
      <SelectDbData
        name={'recipientNames'}
        label={'Recipient Names:'}
        multiple={true}
        titleField={'name'}
        valueField={'contact_id'}
      ></SelectDbData>
    </DbDataProvider>
  )
}
