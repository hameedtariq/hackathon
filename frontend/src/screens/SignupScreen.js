import React from 'react'
import Header from '../components/Header'
import TextBox from '../components/utils/TextBox'
import { useState, useEffect } from 'react'
import { studentSignup } from '../store/thunks/studentThunks'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Alert, CircularProgress } from '@chakra-ui/react'
// import { Alert, CircularProgress } from "@mui/material";
import { AlertTitle, AlertDescription } from '@chakra-ui/react'
import { signupReset } from '../store/slices/studentSlices'

const SignupScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [rollNumber, setRollNumber] = useState('')
  const [roll, setRoll] = useState('')
  const [alert, setAlert] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loading, success, error } = useSelector((state) => {
    return state.signup
  })
  const { Info } = useSelector((state) => {
    return state.Info
  })

  const handleSignUp = () => {
    setAlert('')
    console.log('values', firstName, lastName, rollNumber, email, password)
    // return;
    if (
      !firstName ||
      !lastName ||
      !roll ||
      !rollNumber ||
      !password ||
      !email
    ) {
      setAlert('Please Fill in the form first')
    }

    dispatch(
      studentSignup({ firstName, lastName, rollNumber, email, password, roll })
    )
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    if (success) {
      navigate('/login')
    }
  }, [success])

  return (
    <>
      <div className='flex flex-col min-h-screen w-full h-fit'>
        <Header />
        {/* {error && (
          <Alert severity="error" className="">
            <strong>{error}</strong>
          </Alert>
        )} */}

        {/* {alert && <Alert severity="error" className="">
          <strong>{alert}</strong>
        </Alert>
        } */}
        {alert && (
          <Alert status='error' w='80%' className='m-auto z-[1000] top-10'>
            <AlertTitle>{alert}</AlertTitle>
          </Alert>
        )}

        <div className='flex justify-center bg-white h-full w-full flex-grow'>
          <div className='laptop:w-[450px] tabletOnly:w-[400px] mobile:w-[320px] text-center pb-10'>
            {/* TOP */}
            <div className='top mt-5'>
              <h2 className='font-bold text-lg'>Sign Up</h2>
              <p className='text-base2 text-light'>
                Already have an account?{' '}
                <label className=' text-primary'>
                  <Link to={'/login'}>Sign In</Link>
                </label>
              </p>
            </div>

            {/* FORM */}

            <div className='form mt-[50px]'>
              <div className='flex flex-col items-center gap-x-2'>
                {/* first name */}
                <div className='w-full text-left my-2'>
                  <label
                    className='text-base1 font-normal block mb-1'
                    htmlFor='firstName'
                  >
                    first Name
                  </label>
                  <input
                    name='firstName'
                    placeholder='first Name'
                    value={firstName}
                    type='text'
                    onChange={(e) => setFirstName(e.target.value)}
                    className='w-full bg-lightgrey h-[40px] rounded-xl p-3 outline-none'
                    required
                  />
                </div>

                {/* Last name */}
                <div className='w-full text-left my-2'>
                  <label
                    className='text-base1 font-normal block mb-1'
                    htmlFor='lastName'
                  >
                    Last Name
                  </label>
                  <input
                    name='lastName'
                    placeholder='Last Name'
                    value={lastName}
                    type='text'
                    onChange={(e) => setLastName(e.target.value)}
                    className='w-full bg-lightgrey h-[40px] rounded-xl p-3 outline-none'
                    required
                  />
                </div>

                <div className='w-full text-left my-2'>
                  <label
                    className='text-base1 font-normal block mb-1'
                    htmlFor='rollNumber'
                  >
                    Roll NUmber
                  </label>
                  <input
                    name='rollNumber'
                    placeholder='Roll Number'
                    value={rollNumber}
                    type='text'
                    onChange={(e) => setRollNumber(e.target.value)}
                    className='w-full bg-lightgrey h-[40px] rounded-xl p-3 outline-none'
                    required
                  />
                </div>

                {/* email */}
                <div className='w-full text-left my-2'>
                  <label
                    className='text-base1 font-normal block mb-1'
                    htmlFor='email'
                  >
                    Email
                  </label>
                  <input
                    name='email'
                    placeholder='email'
                    value={email}
                    type='text'
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full bg-lightgrey h-[40px] rounded-xl p-3 outline-none'
                    required
                  />
                </div>

                {/* password */}
                <div className='w-full text-left my-2'>
                  <label
                    className='text-base1 font-normal block mb-1'
                    htmlFor='password'
                  >
                    Password
                  </label>
                  <input
                    name='password'
                    placeholder={'password'}
                    value={password}
                    type='text'
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full bg-lightgrey h-[40px] rounded-xl p-3 outline-none'
                    required
                  />
                </div>
              </div>

              {/* Role radio buttons */}
              <div className='flex flex-col mt-5'>
                <label
                  className='text-base1 font-normal block mb-1 mr-auto'
                  htmlFor='password'
                >
                  Role
                </label>

                <div className='flex gap-2'>
                  <input
                    type='radio'
                    name='role'
                    value='student'
                    required
                    onChange={(e) => setRoll(e.target.value)}
                  />
                  <p>Student</p>
                </div>

                <div className='flex gap-2'>
                  <input
                    type='radio'
                    name='role'
                    value='instructor'
                    onChange={(e) => setRoll(e.target.value)}
                  />
                  <p>Instructor</p>
                </div>
              </div>

              <button
                onClick={() => handleSignUp()}
                className=' bg-primary w-full h-[50px] rounded-[40px] mt-10'
              >
                <p className='font-bold text-white text-base2'>
                  {loading ? (
                    <CircularProgress
                      color='inherit'
                      className='mr-10'
                      size={'20px'}
                    />
                  ) : (
                    'Sign Up'
                  )}
                </p>
              </button>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupScreen
