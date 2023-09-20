export const formatContactFromEvent = (e, id) => {
  const name = e.target[0].value
  const number = e.target[1].value
  const email = e.target[2].value
  if(id) {
    return {
      number,
      name,
      id,
      email
    }
  }

  return {
    number,
    name,
    email
  }
}