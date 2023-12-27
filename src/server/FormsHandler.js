// 'use server'

import { insert } from '@/db/WriteService'
import SubmitHandler from '@/utils/SubmitHandler'

export async function add(formData) {
  this.log(formData)

  const error = await insert('letters', {
    is_incoming: 'true',
    action_date: '2023-10-31',
  })

  if (error) {
    // console.error(error)
    return res
      .status(500)
      .json({ message: 'Error inserting data into database', error: error })
  }

  return res
    .status(200)
    .json({ message: 'Data inserted into database', data: data })
}

async function log(formData) {
  console.log(SubmitHandler.buildFormJson(formData))
}
