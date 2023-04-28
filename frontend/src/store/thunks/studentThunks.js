import request from "../../utils/request";
import { createAsyncThunk } from "@reduxjs/toolkit";

const login = createAsyncThunk(
    "login/login",
    async (loginCredentials, { rejectWithValue }) => {

        try {
            const { data } = await request.post("/login", loginCredentials, {
                withCredentials: true,
            });

            localStorage.setItem("Info", JSON.stringify(data.user));

            return data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const studentSignup = createAsyncThunk(
    "signup/studentSignup",
    async (signUpCredentials, { rejectWithValue }) => {
        try {
            const { data } = await request.post(
                "/student/register",
                signUpCredentials,
                { withCredentials: true }
            );

            return data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export {studentSignup, login}