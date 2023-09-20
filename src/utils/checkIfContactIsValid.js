import * as yup from 'yup'

const regex = /^^([1-9]{2})[0-9]{8,9}$/

const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  number: yup.string().required().matches(regex),
  email: yup.string().email(),
})

export const isContactValid = data => {
  return contactSchema.validate(data)
  .then(response => response)
  .catch(error => {
    return {errorMessage: error};
  })  
}
