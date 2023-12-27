'use client'

import IsIncoming from './IsIncoming'
import ActionDate from './ActionDate'
import SenderName from './SenderName'
import RecipientNames from './RecipientNames'
import TextButton from '@/components/interface/buttons/TextButton'
import PdfFile from './PdfFile'
import Comments from './Comments'
import SubmitHandler from '@/utils/SubmitHandler'
import { add } from '@/server/FormsHandler'

export default function FormAddLetter() {
  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault()

    SubmitHandler.sendFormJson(
      SubmitHandler.buildFormJson(SubmitHandler.extractFormData(e)),
      e.target.method,
      '/api/add-letter'
    )
  }

  return (
    // когда тут был FormGroup from '@mui/material', то поля для комментариев
    // тоже растягивались на всю ширину блока
    // и кнопки были друг под другом
    <form
      onSubmit={handleSubmit}
      // action={add}
      method="post"
      className="w-full max-w-xl"
    >
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
