import React, { useState, useEffect } from 'react'
import DbDataContext from './DbDataContext'
import ReadService from '@/db/ReadService'

const { Provider } = DbDataContext

const DbDataProvider = ({ tableName, children }) => {
  const [rows, setRows] = useState([])
  const [rowsError, setRowsError] = useState(null)

  useEffect(() => {
    if (rowsError != null) {
      console.log(rowsError)
    }
  }, [rowsError])

  useEffect(() => {
    const fetchData = async () => {
      const [data, error] = await ReadService.getAll(tableName)
      setRows(data)
      setRowsError(error)
    }

    fetchData()
  }, [tableName])

  return (
    <Provider
      value={{
        rows,
        rowsError,
        tableName,
      }}
    >
      {children}
    </Provider>
  )
}

export default DbDataProvider
