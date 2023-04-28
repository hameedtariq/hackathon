import { createSlice } from '@reduxjs/toolkit'
import { login, studentSignup } from '../thunks/studentThunks'

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    Info: null,
    error: '',
    token: '',
  },
  reducers: {
    removeError: (state) => {
      state.error = ''
    },
    logout: (state) => {
      state.adminInfo = null
      localStorage.removeItem('Info')
      localStorage.clear()
    },
    loginReset: (state) => {
      state.loading = false
      state.success = false
      state.message = ''
      state.error = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.Info = action.payload.user
        state.token = action.payload.token
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload?.error
      })
  },
})

const studentSignupSlice = createSlice({
  name: 'signup',
  initialState: {
    loading: false,
    success: false,
    message: '',
    error: '',
  },
  reducers: {
    signupReset: (state) => {
      state.loading = false
      state.success = false
      state.message = ''
      state.error = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(studentSignup.pending, (state) => {
        state.loading = true
      })
      .addCase(studentSignup.fulfilled, (state, action) => {
        state.loading = false
        state.success = action.payload.success
        state.message = action.payload.message
      })
      .addCase(studentSignup.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload?.error
      })
  },
})

// Actions
export const { loginReset, logout } = loginSlice.actions
export const { signupReset } = signupReset.actions


// Reducers
export { loginSlice, studentSignupSlice }
