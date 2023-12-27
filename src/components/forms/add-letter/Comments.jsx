import AddButton from '@/components/interface/buttons/AddButton'
import { useState } from 'react'

export default function Comments() {
  const [comments, setComments] = useState([''])

  const handleClick = (e) => {
    setComments(comments.concat(['']))
  }

  const handleBlur = (e, index) => {
    setComments(comments.toSpliced(index, 1, e.target.value))
  }

  const commentsList = comments.map((comment, index) => (
    <textarea
      className="mr-2 mt-2 w-full rounded-md border border-gray-300 px-2.5 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
      placeholder="Your comment"
      key={index}
      id={'comment-' + (index + 1)}
      name="comments"
      label={'Comment #' + (index + 1)}
      multiline="true"
      rows={4}
      defaultValue={comment}
      onChange={() => {}}
      onBlur={(e) => handleBlur(e, index)}
    />
  ))

  return (
    <div className="flex flex-col">
      <div className="w-full">{commentsList}</div>
      <div className="flex justify-end">
        <AddButton onClick={handleClick} />
      </div>
    </div>
  )
}
