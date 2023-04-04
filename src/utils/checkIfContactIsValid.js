import * as yup from 'yup'

const regex = /^^([1-9]{2})[0-9]{8,9}$/

const contactSchema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required().matches(regex)
})

export const isContactValid = data => {
  return contactSchema.isValid(data).then(valid => {
    return valid
  })
}
