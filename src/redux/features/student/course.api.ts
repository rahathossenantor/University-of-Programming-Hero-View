import { TOfferedCourse } from "../../../types/courseManagement.types";
import { TDataResWithRedux, TQueryParam } from "../../../types/types.global";
import baseApi from "../../api/baseApi";

const courseApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // course APIs
        getMyOfferedCourses: builder.query({
            query: (queryParams?: TQueryParam[]) => {
                const params = new URLSearchParams();
                if (queryParams) {
                    queryParams.forEach((query: TQueryParam) => {
                        params.append(query.name, query.value as string);
                    });
                };

                return {
                    url: "/offered-courses/get-my-offered-courses",
                    method: "GET",
                    params,
                };
            },
            providesTags: ["myOfferedCourses"],
            transformResponse: (response: TDataResWithRedux<TOfferedCourse[]>) => {
                return {
                    data: response?.data?.data,
                    meta: response?.data?.meta,
                };
            },
        }),
        enrollCourse: builder.mutation({
            query: (course) => ({
                url: "/enrolled-courses/create-enrolled-course",
                method: "POST",
                body: course,
            }),
            invalidatesTags: ["myOfferedCourses"],
        }),
    }),
});

export const {
    useGetMyOfferedCoursesQuery,
    useEnrollCourseMutation,
} = courseApi;
