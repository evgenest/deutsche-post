import IsIncoming from './IsIncoming'
import ActionDate from './ActionDate'
import SenderName from './SenderName'
import RecipientNames from './RecipientNames'
import TextButton from '@/components/interface/buttons/TextButton'
import PdfFile from './PdfFile'
import Comments from './Comments'

export default function FormAddLetter() {
  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault()

    // Read the form data
    const form = e.target
    const formData = new FormData(form)

    // You can pass formData as a fetch body directly:
    // fetch('/api/add-letter', { method: form.method, body: formData })

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries())
    formJson.recipientNames = formData.getAll('recipientNames')

    // console.log(formJson)
  }

  return (
    // когда тут был FormGroup from '@mui/material', то поля для комментариев
    // тоже растягивались на всю ширину блока
    // и кнопки были друг под другом
    <form onSubmit={handleSubmit} method="post" className="w-full max-w-xl">
      <div className="flex flex-col space-y-4">
        <div className="">
          <IsIncoming />
        </div>
        <div className="">
          <ActionDate />
        </div>
        <div className="">
          <SenderName />
        </div>
        <div className="">
          <RecipientNames />
        </div>
        <div className="w-full">
          <Comments />
        </div>
        <div className="">
          <PdfFile />
        </div>
        <div className="flex flex-col items-center">
          <TextButton type="submit">Submit</TextButton>
        </div>
      </div>
    </form>
  )
}
