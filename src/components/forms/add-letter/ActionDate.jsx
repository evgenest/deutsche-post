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
      <div className="flex flex-row">
        <div className="flex flex-col">
          <label className="flex-grow pr-1" htmlFor="actionDate">
            Action date:
          </label>

          <input
            className="form-input mt-1 block flex-shrink"
            type="date"
            name="actionDate"
            value={actionDate}
            onChange={(e) => {
              setActionDate(e.target.value)
            }}
          ></input>
        </div>

        <p className="ml-4 mt-1 max-w-xs text-sm text-gray-500 dark:text-gray-400">
          When have received if the letter is incoming or when have sent if the
          letter is outgoing.
        </p>
      </div>
    </Fragment>
  )
}
