import SelectDbData from '@/components/interface/SelectDbData'
import DbDataProvider from '@/context/DbDataProvider'

export default function SenderName() {
  return (
    <DbDataProvider tableName={'contacts'}>
      <SelectDbData
        name={'senderName'}
        label={'Sender Name:'}
        titleField={'name'}
        valueField={'contact_id'}
      ></SelectDbData>
    </DbDataProvider>
  )
}
