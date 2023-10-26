import SelectDbData from '@/components/interface/SelectDbData'
import DbDataProvider from '@/context/DbDataProvider'

export default function RecipientNames() {
  return (
    <DbDataProvider tableName={'contacts'}>
      <SelectDbData
        name={'recipientNames'}
        label={'Recipient Names:'}
        titleField={'name'}
        valueField={'contact_id'}
        multiple={true}
      ></SelectDbData>
    </DbDataProvider>
  )
}
