import SelectDbData from '@/components/interface/SelectDbData'
import DbDataProvider from '@/context/DbDataProvider'

export default function PdfFile() {
  return (
    <DbDataProvider tableName={'files'}>
      <SelectDbData
        name={'pdfFile'}
        label={'File Name:'}
        titleField={'name'}
        valueField={'file_id'}
      ></SelectDbData>
    </DbDataProvider>
  )
}
