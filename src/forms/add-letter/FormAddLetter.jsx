import { Button, Divider, FormGroup } from '@mui/material'
import React from 'react'
import IsIncoming from './IsIncoming'
import ActionDate from './ActionDate'
import SenderName from './SenderName'
import RecipientNames from './RecipientNames'
import PdfFile from './PdfFile'
import Comments from './Comments'
import { ContactsProvider } from '@/context/ContactsProvider'

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
  }

  return (
    // когда тут был FormGroup from '@mui/material', то поля для комментариев
    // тоже растягивались на всю ширину блока
    // и кнопки были друг под другом
    <ContactsProvider>
      <form className="gap-2" onSubmit={handleSubmit} method="post">
        <IsIncoming />
        <br />
        <ActionDate />
        <br />
        <SenderName />
        <br />
        <RecipientNames />
        <br />
        {/* <PdfFile />
      <br/>
      <Divider sx={{ marginTop: 2, marginBottom: 2 }}>Comments</Divider>
      <Comments /> */}
        <br />
        <Button type="submit">Submit</Button>
      </form>
    </ContactsProvider>
  )
}