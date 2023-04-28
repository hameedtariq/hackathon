import request from '../../utils/request'
import { createAsyncThunk } from '@reduxjs/toolkit'

const login = createAsyncThunk(
    'createCourse/createCourse',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await request.post(
                '/courses',
                credentials,
                {
                    withCredentials: true,
                }
            )

            return data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)