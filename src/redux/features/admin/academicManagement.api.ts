import { TAcademicDepartment, TAcademicFaculty, TAcademicSemester } from "../../../types/academicMangement.types";
import { TDataResWithRedux, TQueryParam } from "../../../types/types.global";
import baseApi from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // academic semester APIs
        createAcademicSemester: builder.mutation({
            query: (academicSemester) => ({
                url: "/academic-semesters/create-academic-semester",
                method: "POST",
                body: academicSemester,
            }),
            invalidatesTags: ["academicSemesters"],
        }),
        getAllAcademicSemesters: builder.query({
            query: (queryParams?: TQueryParam[]) => {
                const params = new URLSearchParams();
                if (queryParams) {
                    queryParams.forEach((query: TQueryParam) => {
                        params.append(query.name, query.value as string);
                    });
                };

                return {
                    url: "/academic-semesters",
                    method: "GET",
                    params,
                };
            },
            providesTags: ["academicSemesters"],
            transformResponse: (response: TDataResWithRedux<TAcademicSemester[]>) => {
                return {
                    data: response?.data?.data,
                    meta: response?.data?.meta,
                };
            },
        }),

        // academic department APIs
        createAcademicDepartment: builder.mutation({
            query: (academicDepartment) => ({
                url: "/academic-departments/create-academic-department",
                method: "POST",
                body: academicDepartment,
            }),
            invalidatesTags: ["academicDepartments"],
        }),
        getAllAcademicDepartments: builder.query({
            query: (queryParams?: TQueryParam[]) => {
                const params = new URLSearchParams();
                if (queryParams) {
                    queryParams.forEach((query: TQueryParam) => {
                        params.append(query.name, query.value as string);
                    });
                };

                return {
                    url: "/academic-departments",
                    method: "GET",
                    params,
                };
            },
            providesTags: ["academicDepartments"],
            transformResponse: (response: TDataResWithRedux<TAcademicDepartment[]>) => {
                return {
                    data: response?.data?.data,
                    meta: response?.data?.meta,
                };
            },
        }),

        // academic faculty APIs
        createAcademicFaculty: builder.mutation({
            query: (academicFaculty) => ({
                url: "/academic-faculties/create-academic-faculty",
                method: "POST",
                body: academicFaculty,
            }),
            invalidatesTags: ["academicFaculties"],
        }),
        getAllAcademicFaculties: builder.query({
            query: (queryParams?: TQueryParam[]) => {
                const params = new URLSearchParams();
                if (queryParams) {
                    queryParams.forEach((query: TQueryParam) => {
                        params.append(query.name, query.value as string);
                    });
                };

                return {
                    url: "/academic-faculties",
                    method: "GET",
                    params,
                };
            },
            providesTags: ["academicFaculties"],
            transformResponse: (response: TDataResWithRedux<TAcademicFaculty[]>) => {
                return {
                    data: response?.data?.data,
                    meta: response?.data?.meta,
                };
            }
        }),
    }),
});

export const {
    useCreateAcademicSemesterMutation,
    useGetAllAcademicSemestersQuery,

    useCreateAcademicFacultyMutation,
    useGetAllAcademicFacultiesQuery,

    useCreateAcademicDepartmentMutation,
    useGetAllAcademicDepartmentsQuery,
} = academicManagementApi;
