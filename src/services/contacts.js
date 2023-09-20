import { api } from "./api"

const baseUrl = (number) => `/numbers/${number}/contacts`


export const getContacts = async (user, number) => {
  const url = baseUrl(number)

  return await api.get(url, {
    headers: { Authorization: user.token }
  })
}


export const addContact = async (user, number, contact) => {
  const url = baseUrl(number);

  return await api.post(
    url,
    contact,
    {
      headers: { Authorization: user.token }
    }
  )
}

export const editContact = async (user, number, contact) => {
  const defaultUrl = baseUrl(number);
  const url = `${defaultUrl}/${contact.id}`

  return await api.put(
    url,
    contact,
    {
      headers: { Authorization: user.token }
    }
  )
}


export const deleteContact = async (user, number, contactId) => {
  const defaultUrl = baseUrl(number);
  const url = `${defaultUrl}/${contactId}`

  return await api.delete(url, { headers: { Authorization: user.token }})
}





