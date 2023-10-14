import { Fragment, useState } from 'react'

// 👇️👇️👇️ Format Date as yyyy-mm-dd hh:mm:ss
// 👇️ (Helper functions)
function padTo2Digits(num) {
  return num.toString().padStart(2, '0')
}

function formatDate(date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-') +
    ' ' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      // padTo2Digits(date.getSeconds()),  // 👈️ can also add seconds
    ].join(':')
  )
}

export default function ActionDate() {
  const defaultDate = formatDate(new Date()).split(' ')[0]
  const [actionDate, setActionDate] = useState(defaultDate)

  return (
    <Fragment>
      <label htmlFor="actionDate">Action date:</label>
      <br />
      <input
        type="date"
        name="actionDate"
        value={actionDate}
        onChange={(e) => {
          setActionDate(e.target.value)
        }}
      ></input>
    </Fragment>
  )
}
