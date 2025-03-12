import { TDataResWithRedux, TQueryParam } from "../../../types/types.global";
import baseApi from "../../api/baseApi";

const courseApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // course APIs
        getFacultyCourses: builder.query({
            query: (queryParams?: TQueryParam[]) => {
                const params = new URLSearchParams();
                if (queryParams) {
                    queryParams.forEach((query: TQueryParam) => {
                        params.append(query.name, query.value as string);
                    });
                };

                return {
                    url: "/enrolled-courses",
                    method: "GET",
                    params,
                };
            },
            // providesTags: [""],
            transformResponse: (response: TDataResWithRedux<any>) => {
                return {
                    data: response?.data?.data,
                    meta: response?.data?.meta,
                };
            },
        }),
    }),
});

export const {
    useGetFacultyCoursesQuery,
} = courseApi;
