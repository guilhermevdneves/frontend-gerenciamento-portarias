export const dateMask = (value) => {
  const cleanedInput = value.replace(/\D/g, '');

  const maxLength = 8; // DD/MM/AAAA tem 8 dígitos
  const truncatedInput = cleanedInput.slice(0, maxLength);

  
  if (truncatedInput.length >= 1) {
    let formattedDate = truncatedInput.substring(0, 2);
    if (truncatedInput.length >= 3) {
      formattedDate += '/' + truncatedInput.substring(2, 4);
      if (truncatedInput.length >= 5) {
        formattedDate += '/' + truncatedInput.substring(4, 8);
      }
    }
    return formattedDate;
  }

  return '';
}
