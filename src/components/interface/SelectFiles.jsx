import { FilesContext } from '@/context/FilesProvider'
import { Fragment, useMemo, useState, useContext } from 'react'

export default function SelectFiles({ name, label, multiple = false }) {
  const [selected, setSelected] = useState(multiple ? [] : '')
  const { files } = useContext(FilesContext)

  useMemo(() => {
    if (files.length) {
      if (multiple) setSelected([files[0].file_id])
      else setSelected(files[0].file_id)
    }
  }, [files, multiple])

  const getSelectedOptions = (select) => {
    if (!multiple) return select.value

    const values = Array.from(select.selectedOptions).map((option) => {
      return option.value
    })
    return values
  }

  return (
    <Fragment>
      <div className="flex justify-between">
        <label className="pr-1 leading-tight" htmlFor={name}>
          {label}
        </label>
        <select
          multiple={multiple}
          name={name}
          value={selected}
          onChange={(e) => setSelected(getSelectedOptions(e.target))}
        >
          {files.map((file) => (
            <option key={file.file_id} value={file.file_id}>
              {file.name}
            </option>
          ))}
        </select>
      </div>
    </Fragment>
  )
}
