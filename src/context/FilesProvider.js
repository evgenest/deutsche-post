import { createContext, useEffect, useMemo, useState } from 'react'
import ReadService from '@/db/ReadService'

const FilesContext = createContext(null)
const { Provider } = FilesContext

const FilesProvider = ({ children }) => {
  const [files, setFiles] = useState([])
  const [filesError, setFilesError] = useState(null)

  useMemo(() => {
    if (filesError != null) {
      console.log(filesError)
    }
  }, [filesError])

  useEffect(() => {
    return async () => {
      const [data, error] = await ReadService.getAll('files')
      setFiles(data)
      setFilesError(error)
    }
  }, [])

  return (
    <Provider
      value={{
        files,
        setFiles,
        filesError,
        setFilesError,
      }}
    >
      {children}
    </Provider>
  )
}

export { FilesContext, FilesProvider }
