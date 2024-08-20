import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: ""
    },
    reducers: {
        loginUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },
        logoutUser: (state) => {
            state.user = null;
            state.token = "";
        },
    }
});
const authReducer = authSlice.reducer;

export const { loginUser, logoutUser } = authSlice.actions;
export default authReducer;
