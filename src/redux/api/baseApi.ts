import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { loginUser, logoutUser } from "../features/auth/authSlice";
import { RootState } from "../store";
import { toast } from "sonner";

// export const baseUrl = "http://localhost:5000/api/v1";
export const baseUrl = "https://university-of-programming-hero.vercel.app/api/v1";

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

const customBaseQuery: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions): Promise<any> => {
    try {
        let query = await baseQuery(args, api, extraOptions);

        if (query?.error?.status === 403) {
            toast.error(
                (query?.error?.data as Partial<{ message: string }>)?.message,
                { duration: 1000 },
            );
        };

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
            };
        };
        return query;
    } catch (err: any) {
        toast.error(err?.message || "Something went wrong!");
    };
};

const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: customBaseQuery,
    tagTypes: [
        "faculties",
        "students",
        "academicSemesters",
        "academicDepartments",
        "academicFaculties",
        "semesterRegistrations",
        "courses",
        "facultiesWithCourse",
        "offeredCourses",
        "myOfferedCourses",
    ],
    endpoints: () => ({})
});

export default baseApi;
