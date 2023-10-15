import { ContactsContext } from '@/context/ContactsProvider'
import { Fragment, useMemo, useState, useContext } from 'react'

export default function SelectContacts({ name, label, multiple = false }) {
  const [selected, setSelected] = useState(multiple ? [] : '')
  const { contacts } = useContext(ContactsContext)

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
        <label className="pr-1" htmlFor={name}>
          {label}
        </label>
        {/* <br /> */}
        <select
          className=""
          multiple={multiple}
          name={name}
          value={selected}
          onChange={(e) => setSelected(getSelectedOptions(e.target))}
        >
          {contacts.map((contact) => (
            <option key={contact.contact_id} value={contact.contact_id}>
              {contact.name}
            </option>
          ))}
        </select>
      </div>
    </Fragment>
  )
}
