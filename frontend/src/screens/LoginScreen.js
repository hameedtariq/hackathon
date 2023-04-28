import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/Header'
import TextBox from '../components/utils/TextBox'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { loginSchema } from '../schemas'
// import { login } from "../store/thunks/";
import { loginReset } from '../store/slices/studentSlices'
import { CircularProgress } from '@chakra-ui/react'
import { login } from '../store/thunks/studentThunks'

const LoginScreen = () => {
  const [initialValues] = useState({
    email: '',
  })

  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loading, Info, error } = useSelector((state) => {
    return state.Info
  })

  const handleLogin = (e) => {
    dispatch(loginReset())
    if (Object.keys(errors).length === 0) {
      console.log('values')
      dispatch(login({ ...values, role: 'student' }))
    }
    e.preventDefault()
  }

  useEffect(() => {
    if (Info) {
      navigate('/dashboard')
    }

    error &&
      setTimeout(() => {
        dispatch(loginReset())
      }, 2000)
  }, [Info, navigate, error])

  return (
    <>
      <div className='flex flex-col h-screen w-full'>
        <Header />
        {/* {error && (
          <Alert
            severity="error"
            sx={{
              position: "fixed",
              width: "90%",
              margin: "auto",
              top: 20,
              left: 0,
              right: 0,
              zIndex: 10,
            }}
          >
            <strong>{error}</strong>
          </Alert>
        )} */}

        <div className='flex justify-center bg-white h-scree w-full flex-grow'>
          <div className='laptop:w-[450px] tabletOnly:w-[400px] mobile:w-[320px] h-[400px] text-center'>
            {/* TOP */}
            <div className='top mt-10'>
              <h2 className='font-bold text-lg'>Sign In</h2>
              <p className='text-base2 text-light'>
                Don’t have an account?{' '}
                <label className=' text-primary'>
                  <Link to={'/signup'}>Sign Up</Link>
                </label>
              </p>
            </div>

            {/* FORM */}
            <form //onSubmit={handleSubmit}
              className='form mt-[70px]'
            >
              <div className='mb-5'>
                <TextBox
                  label={'Email'}
                  name={'email'}
                  value={values.email}
                  onChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                />
                {errors.email && touched.email ? (
                  <p className='text-[red]'>{errors.email}</p>
                ) : null}
              </div>
              <TextBox
                label={'Password'}
                name={'password'}
                type={'password'}
                value={values.password}
                onChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
              />

              <div className='forgot w-full text-right'>
                <p className='text-light text-base2'>
                  <Link to='forgetPassword'>forgot password?</Link>
                </p>
              </div>

              <button
                onClick={handleLogin}
                className=' bg-primary w-full h-[50px] rounded-[40px] mt-10'
              >
                <p className='font-bold text-white text-base2'>
                  {loading ? (
                    <CircularProgress isIndeterminate size={10} color='red' />
                  ) : (
                    'Sign In'
                  )}
                </p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginScreen
