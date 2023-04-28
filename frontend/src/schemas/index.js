import * as Yup from 'yup';

const loginSchema = Yup.object({
  email: Yup.string().email('Please enter a valid email').lowercase().required('Required'),
})


const forgetSchema = Yup.object({
  email: Yup.string().email('Please enter a valid email').lowercase().required('Required'),
})

const resetSchema = Yup.object({
  newPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number or special character')
    .required('Required')
})

const registrationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').lowercase().required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number or special character')
    .required('Required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  phoneNumber: Yup.string().min(10, 'Please enter a valid phone number').required('Required'),
  address: Yup.object().shape({
    line1: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    zipCode: Yup.string().matches(/^\d{5}(?:[-\s]\d{4})?$/, 'Please enter a valid zip code').required('Required'),
  }),
  isManager: Yup.boolean().required('Required'),
});


export { loginSchema, registrationSchema, forgetSchema, resetSchema }
