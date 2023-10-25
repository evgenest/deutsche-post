import DbDataContext from '@/context/DbDataContext'
import { Fragment, useMemo, useState, useContext } from 'react'

export default function SelectContacts({ name, label, multiple = false }) {
  const [selected, setSelected] = useState(multiple ? [] : '')
  const { rows: contacts } = useContext(DbDataContext)
  const [filterText, setFilterText] = useState('')

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterText.toLowerCase())
    )
  }, [contacts, filterText])

  // Set the first contact as selected by default
  // on the first page rendering
  useMemo(() => {
    if (contacts.length) {
      if (multiple) setSelected([contacts[0].contact_id])
      else setSelected(contacts[0].contact_id)
    }
  }, [contacts, multiple])

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
        {filteredContacts.map((contact) => (
          <option key={contact.contact_id} value={contact.contact_id}>
            {contact.name}
          </option>
        ))}
      </select>
      <input
        className="form-input mt-1 block w-full"
        placeholder="Search contacts"
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    </Fragment>
  )
}
