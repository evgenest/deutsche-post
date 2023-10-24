import { createContext, useEffect, useMemo, useState } from 'react'
import ReadService from '@/db/ReadService'
import { useFetching } from '@/components/hooks/useFetching'

const ContactsContext = createContext(null)
const { Provider } = ContactsContext

const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([])
  const [contactsError, setContactsError] = useState(null)

  // const [fetchContacts, isContactsLoading, contactsFetchingError] = useFetching(
  //   async (table) => {
  //     const [data, error] = await ReadService.getAll(table)
  //     setContacts(data)
  //     setContactsError(error)
  //   }
  // )

  useMemo(() => {
    if (contactsError != null) {
      console.log(contactsError)
    }
  }, [contactsError])

  // useMemo(() => {
  //   console.log('contacts')
  //   console.log(contacts)
  // }, [contacts])

  useEffect(() => {
    // console.log('useEffect')
    // return async () => await fetchContacts('contacts')
    return async () => {
      const [data, error] = await ReadService.getAll('contacts')
      setContacts(data)
      setContactsError(error)
    }
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
