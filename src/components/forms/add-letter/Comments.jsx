import MyButton from '@/components/interface/MyButton'
import { useState, Fragment } from 'react'

export default function Comments() {
  const [comments, setComments] = useState([''])

  const handleClick = (e) => {
    console.log(e.target.value)
    setComments([...comments, e.target.value])
  }

  const commentsList = comments.map((comment, index) => (
    <textarea
      key={index}
      id={'comment-' + (index + 1)}
      label={'Comment #' + (index + 1)}
      multiline
      rows={4}
      defaultValue={comment}
    />
  ))

  return (
    <Fragment>
      {commentsList}
      <MyButton onClick={handleClick}>One more comment</MyButton>
    </Fragment>
  )
}
