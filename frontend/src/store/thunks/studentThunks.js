import request from '../../utils/request'
import { createAsyncThunk } from '@reduxjs/toolkit'

const login = createAsyncThunk(
  'login/login',
  async (loginCredentials, { rejectWithValue }) => {
    try {
      if (loginCredentials.role === 'student') {
        const { data } = await request.post(
          '/students/login',
          loginCredentials,
          {
            withCredentials: true,
          }
        )

        localStorage.setItem('Info', JSON.stringify(data.user))

        return data
      } else if (loginCredentials.role === 'instructor') {
        const { data } = await request.post(
          '/instructors/login',
          loginCredentials,
          {
            withCredentials: true,
          }
        )

        localStorage.setItem('Info', JSON.stringify(data.user))

        return data
      }
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

const studentSignup = createAsyncThunk(
  'signup/studentSignup',
  async (signUpCredentials, { rejectWithValue }) => {
    try {
      if (signUpCredentials.instructorId) {
        console.log("inside");
        const { data } = await request.post(
          '/instructors/register',
          signUpCredentials,
          { withCredentials: true }
        )
        return data
      } else {
        const { data } = await request.post(
          '/students/register',
          signUpCredentials,
          { withCredentials: true }
        )
        return data
      }
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export { studentSignup, login }
