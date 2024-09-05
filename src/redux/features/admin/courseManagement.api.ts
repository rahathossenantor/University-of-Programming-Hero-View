import { TCourse, TSemesterRegistration } from "../../../types/courseManagement.types";
import { TDataResWithRedux, TQueryParam } from "../../../types/types.global";
import baseApi from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // semester registration APIs
        createSemesterRegistration: builder.mutation({
            query: (semesterRegistration) => ({
                url: "/semester-registrations/create-semester-registration",
                method: "POST",
                body: semesterRegistration,
            }),
            invalidatesTags: ["semesterRegistrations"],
        }),
        getAllSemesterRegistrations: builder.query({
            query: (queryParams?: TQueryParam[]) => {
                const params = new URLSearchParams();
                if (queryParams) {
                    queryParams.forEach((query: TQueryParam) => {
                        params.append(query.name, query.value as string);
                    });
                };

                return {
                    url: "/semester-registrations",
                    method: "GET",
                    params,
                };
            },
            providesTags: ["semesterRegistrations"],
            transformResponse: (response: TDataResWithRedux<TSemesterRegistration[]>) => {
                return {
                    data: response?.data?.data,
                    meta: response?.data?.meta,
                };
            },
        }),
        updateSemesterRegistrationStatus: builder.mutation({
            query: (args) => ({
                url: `/semester-registrations/${args.id}`,
                method: "PATCH",
                body: args.data,
            }),
            invalidatesTags: ["semesterRegistrations"],
        }),

        // course APIs
        createCourse: builder.mutation({
            query: (course) => ({
                url: "/courses/create-course",
                method: "POST",
                body: course,
            }),
            invalidatesTags: ["courses"],
        }),
        getAllCourses: builder.query({
            query: (queryParams?: TQueryParam[]) => {
                const params = new URLSearchParams();
                if (queryParams) {
                    queryParams.forEach((query: TQueryParam) => {
                        params.append(query.name, query.value as string);
                    });
                };

                return {
                    url: "/courses",
                    method: "GET",
                    params,
                };
            },
            providesTags: ["courses"],
            transformResponse: (response: TDataResWithRedux<TCourse[]>) => {
                return {
                    data: response?.data?.data,
                    meta: response?.data?.meta,
                };
            },
        }),
        assignFaculties: builder.mutation({
            query: (args) => ({
                url: `/courses/assign-faculties/${args.id}`,
                method: "PUT",
                body: args.data,
            }),
            invalidatesTags: ["facultiesWithCourse"],
        }),
        getFacultiesWithCourse: builder.query({
            query: (courseId?: string) => ({
                url: `/courses/get-faculties/${courseId}`,
                method: "GET",
            }),
            providesTags: ["facultiesWithCourse"],
        }),
        createOfferedCourse: builder.mutation({
            query: (offeredCourse) => ({
                url: "/offered-courses/create-offered-course",
                method: "POST",
                body: offeredCourse,
            }),
            invalidatesTags: ["offeredCourses"],
        }),
    }),
});

export const {
    useCreateSemesterRegistrationMutation,
    useGetAllSemesterRegistrationsQuery,
    useUpdateSemesterRegistrationStatusMutation,

    useCreateCourseMutation,
    useGetAllCoursesQuery,
    useAssignFacultiesMutation,
    useGetFacultiesWithCourseQuery,
    useCreateOfferedCourseMutation,
} = courseManagementApi;
