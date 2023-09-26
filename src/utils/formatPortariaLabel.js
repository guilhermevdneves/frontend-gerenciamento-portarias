export const formatPortariaLabel = (portaria) => {
  return `${portaria.numero}/${new Date(portaria.publicacao).getFullYear()}`
}