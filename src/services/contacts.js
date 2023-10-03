import { api } from "./api"

const baseUrl = (servidorId) => `/user/${servidorId}`


export const getServidores = async (user) => {
  const url = '/users'

  return await api.get(url, {
    headers: { Authorization: user.token }
  })
}


export const addServidor = async (user, servidor) => {
  const url = '/user';

  return await api.post(
    url,
    servidor,
    {
      headers: { Authorization: user.token }
    }
  )
}

export const editServidor = async (user, servidorId, contact) => {
  const url = baseUrl(servidorId);

  return await api.put(
    url,
    contact,
    {
      headers: { Authorization: user.token }
    }
  )
}


export const deleteContact = async (user, servidorId) => {
  const url = baseUrl(servidorId);

  return await api.delete(url, { headers: { Authorization: user.token }})
}





