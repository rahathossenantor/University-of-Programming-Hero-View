import baseApi from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: credentials
            }),
        }),
        changePassword: builder.mutation({
            query: (credentials) => ({
                url: "/auth/change-password",
                method: "POST",
                body: credentials
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useChangePasswordMutation,
} = authApi;
