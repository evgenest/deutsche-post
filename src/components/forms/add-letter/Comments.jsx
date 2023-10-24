import { Button, TextField, useTheme } from '@mui/material'
import React, { Fragment } from 'react'

export default function Comments() {
  const theme = useTheme()
  const [comments, setComments] = React.useState([''])

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
      <Button
        variant="contained"
        // добавил, потому что сбивался цвет из-за @tailwind base
        style={{ backgroundColor: theme.palette.primary.main }}
        onClick={handleClick}
      >
        One more comment
      </Button>
    </Fragment>
  )
}
