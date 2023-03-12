import { createSlice } from "@reduxjs/toolkit";
import { signup } from "../auth/auth-operations";

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error:null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder.addCase(signup.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(signup.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.user = payload.user;
                state.token = payload.token;
                state.isLogin=true
            })
            .addCase(signup.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
        })
    }
})

export default authSlice.reducer