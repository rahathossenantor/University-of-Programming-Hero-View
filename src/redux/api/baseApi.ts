import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { loginUser, logoutUser } from "../features/auth/authSlice";

// const baseUrl = "http://localhost:5000/api/v1";
const baseUrl = "https://university-of-programming-hero.vercel.app/api/v1";

const baseQuery = fetchBaseQuery({
    baseUrl,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const { token } = (getState() as RootState).auth;
        if (token) {
            headers.set("authorization", token);
        }
        return headers;
    }
});

const customBaseQuery: BaseQueryFn<
    FetchArgs,
    BaseQueryApi,
    DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
    let query = await baseQuery(args, api, extraOptions);

    if (query?.error?.status === 401) {
        // get refresh token
        const res = await fetch(`${baseUrl}/auth/refresh-token`, {
            method: "POST",
            credentials: "include",
        });
        const data = await res.json();

        if (data?.data?.accessToken) {
            // set refresh token as access token
            const { user } = (api.getState() as RootState).auth;
            api.dispatch(
                loginUser({
                    user,
                    token: data.data.accessToken
                })
            );

            query = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logoutUser());
        }
    }
    return query;
};

const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: customBaseQuery,
    endpoints: () => ({})
});

export default baseApi;
