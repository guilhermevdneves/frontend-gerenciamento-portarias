import * as yup from 'yup'

const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email(),
})

export const isServidorValid = data => {
  return contactSchema.validate(data)
  .then(response => response)
  .catch(error => {
    return {errorMessage: error};
  })  
}
