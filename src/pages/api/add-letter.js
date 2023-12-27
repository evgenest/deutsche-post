import { insert } from '@/db/WriteService'

export default async function handler(req, res) {
  if (req.method.toLowerCase() === 'post') {
    const {
      isIncoming,
      actionDate,
      senderName,
      recipientNames,
      comments,
      pdfFile,
    } = req.body

    const { data, error } = await insert('letters', {
      is_incoming: isIncoming,
      action_date: actionDate,
    })

    if (error) {
      // console.error(error)
      return res
        .status(500)
        .json({ message: 'Error inserting data into database', error: error })
    }

    return res.status(200).json({
      message: 'Data inserted into database',
      data: data,
    })
  } else {
    return res.status(405).json({ message: 'Method not allowed' })
  }
}
