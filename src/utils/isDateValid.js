export function isDateValid(dateString) {
    
  const datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  if (!datePattern.test(dateString)) {
    return false;
  }

  const [day, month, year] = dateString.split('/').map(Number);

  // Verifica se a data é válida usando o objeto Date
  const date = new Date(year, month - 1, day); // O mês em Date começa em 0 (janeiro é 0)
  if (
    date.getDate() !== day ||
    date.getMonth() !== month - 1 ||
    date.getFullYear() !== year
  ) {
    return false
  } else {
    return true
  }
}
