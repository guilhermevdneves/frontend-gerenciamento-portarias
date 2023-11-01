export const formatDateToDDMMYYYY = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Os meses começam em 0 (janeiro é 0)
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
}