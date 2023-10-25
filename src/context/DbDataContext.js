import { createContext } from 'react'

const DbDataContext = createContext({
  rows: [],
  rowsError: null,
  tableName: '',
})

export default DbDataContext
