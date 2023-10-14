import { createContext, useEffect, useMemo, useState } from 'react'
import supabase from '@/db/supabase'

const ContactsContext = createContext(null)
const { Provider } = ContactsContext

const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([])
  const [contactsError, setContactsError] = useState(null)

  useMemo(() => {
    if (contactsError != null) {
      console.log(contactsError)
    }
  }, [contactsError])

  useEffect(() => {
    const getContacts = async function () {
      const { data, error } = await supabase.from('contacts').select('*')
      setContacts(data)
      setContactsError(error)
    }
    getContacts()
  }, [])

  return (
    <Provider
      value={{
        contacts,
        setContacts,
        contactsError,
        setContactsError,
      }}
    >
      {children}
    </Provider>
  )
}

export { ContactsContext, ContactsProvider }
