import DbDataContext from '@/context/DbDataContext'
import { Fragment, useMemo, useState, useContext } from 'react'

export default function SelectDbData({
  name,
  label,
  multiple = false,
  titleField,
  valueField,
}) {
  const [selected, setSelected] = useState(multiple ? [] : '')
  const [filterText, setFilterText] = useState('')
  const { rows: data, rowsError, tableName } = useContext(DbDataContext)

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item[titleField].toLowerCase().includes(filterText.toLowerCase())
    )
  }, [data, filterText, titleField])

  // Set the first item as selected by default
  // on the first page rendering
  useMemo(() => {
    if (filteredData.length) {
      if (multiple) setSelected([filteredData[0][valueField]])
      else setSelected(filteredData[0][valueField])
    }
  }, [filteredData, multiple, valueField])

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
        {multiple && (
          <span className="text-sm text-gray-500">
            {selected.length} selected
          </span>
        )}
      </div>

      <select
        className="form-select mt-1 block w-full"
        multiple={multiple}
        id={name}
        name={name}
        value={selected}
        onChange={(e) => setSelected(getSelectedOptions(e.target))}
      >
        {filteredData.map((item) => (
          <option key={item[valueField]} value={item[valueField]}>
            {item[titleField]}
          </option>
        ))}
      </select>
      <input
        className="form-input mt-1 block w-full px-2.5 py-2"
        placeholder={'Search ' + tableName}
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    </Fragment>
  )
}
