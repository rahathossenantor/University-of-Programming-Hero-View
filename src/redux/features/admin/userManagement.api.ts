import { TDataResWithRedux, TQueryParam } from "../../../types/types.global";
import { TFaculty, TStudent } from "../../../types/userManagement.types";
import baseApi from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // admin APIs
        createAdmin: builder.mutation({
            query: (admin) => ({
                url: "/users/create-admin",
                method: "POST",
                body: admin,
            }),
        }),

        // faculty APIs
        createFaculty: builder.mutation({
            query: (faculty) => ({
                url: "/users/create-faculty",
                method: "POST",
                body: faculty,
            }),
            invalidatesTags: ["faculties"],
        }),
        getAllFaculties: builder.query({
            query: (queryParams?: TQueryParam[]) => {
                const params = new URLSearchParams();
                if (queryParams) {
                    queryParams.forEach((query: TQueryParam) => {
                        params.append(query.name, query.value as string);
                    });
                };

                return {
                    url: "/faculties",
                    method: "GET",
                    params,
                };
            },
            providesTags: ["faculties"],
            transformResponse: (response: TDataResWithRedux<TFaculty[]>) => {
                return {
                    data: response?.data?.data,
                    meta: response?.data?.meta,
                };
            },
        }),
        getFaculty: builder.query({
            query: (facultyId?: string) => ({
                url: `/faculties/${facultyId}`,
                method: "GET",
            }),
        }),

        // student APIs
        createStudent: builder.mutation({
            query: (student) => ({
                url: "/users/create-student",
                method: "POST",
                body: student,
            }),
            invalidatesTags: ["students"],
        }),
        getAllStudents: builder.query({
            query: (queryParams?: TQueryParam[]) => {
                const params = new URLSearchParams();
                if (queryParams) {
                    queryParams.forEach((query: TQueryParam) => {
                        params.append(query.name, query.value as string);
                    });
                };

                return {
                    url: "/students",
                    method: "GET",
                    params,
                };
            },
            providesTags: ["students"],
            transformResponse: (response: TDataResWithRedux<TStudent[]>) => {
                return {
                    data: response?.data?.data,
                    meta: response?.data?.meta,
                };
            },
        }),
        getSingleStudent: builder.query({
            query: (id: string) => ({
                url: `/students/${id}`,
                method: "GET",
            }),
        }),
    }),
});

export const {
    useCreateAdminMutation,

    useCreateFacultyMutation,
    useGetAllFacultiesQuery,
    useGetFacultyQuery,

    useCreateStudentMutation,
    useGetAllStudentsQuery,
    useGetSingleStudentQuery,
} = userManagementApi;
