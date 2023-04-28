import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slices/studentSlices";

const initialState = {
    Info: {
        Info: JSON.parse(localStorage.getItem("Info")),
    },
};

export const store = configureStore({
    reducer: {
        Info: loginSlice.reducer
    },
    preloadedState: initialState,
});