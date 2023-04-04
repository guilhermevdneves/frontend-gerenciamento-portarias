import * as yup from 'yup'

const contactSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
})

export const checkIfLoginTryIsValid = data => {
  return contactSchema.isValid(data).then(valid => {
    return valid
  })
}
