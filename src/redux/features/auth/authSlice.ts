import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: ""
    },
    reducers: {
        login: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },
        logout: (state) => {
            state.user = null;
            state.token = "";
        },
    }
});
const authReducer = authSlice.reducer;

export const { login, logout } = authSlice.actions;
export default authReducer;
