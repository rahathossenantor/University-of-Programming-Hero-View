import { TAcademicSemesterRes } from "../../../types/academicMangement.types";
import { TDataResWithRedux, TQueryParam } from "../../../types/types.global";
import baseApi from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // academic semester APIs
        createAcademicSemester: builder.mutation({
            query: (academicSemester) => ({
                url: "/academic-semesters/create-academic-semester",
                method: "POST",
                body: academicSemester
            })
        }),
        getAllAcademicSemesters: builder.query({
            query: (queryParams: TQueryParam[]) => {
                const params = new URLSearchParams();
                if (queryParams) {
                    queryParams.forEach((query: TQueryParam) => {
                        params.append(query.name, query.value as string);
                    });
                }

                return {
                    url: "/academic-semesters",
                    method: "GET",
                    params
                };
            },
            transformResponse: (response: TDataResWithRedux<TAcademicSemesterRes[]>) => {
                return {
                    data: response?.data,
                    meta: response?.data?.meta,
                };
            }
        }),

        // academic faculty APIs
        createAcademicFaculty: builder.mutation({
            query: (academicFaculty) => ({
                url: "/academic-faculties/create-academic-faculty",
                method: "POST",
                body: academicFaculty
            })
        }),
        getAllAcademicFaculties: builder.query({
            query: () => ({
                url: "/academic-faculties",
                method: "GET"
            }),
            transformResponse: (response: TDataResWithRedux<TAcademicSemesterRes[]>) => {
                return {
                    data: response?.data,
                    meta: response?.data?.meta,
                };
            }
        }),

        // academic department APIs
        createAcademicDepartment: builder.mutation({
            query: (academicDepartment) => ({
                url: "/academic-departments/create-academic-department",
                method: "POST",
                body: academicDepartment
            })
        }),
    })
});

export const {
    useCreateAcademicSemesterMutation,
    useGetAllAcademicSemestersQuery,

    useCreateAcademicFacultyMutation,
    useGetAllAcademicFacultiesQuery,

    useCreateAcademicDepartmentMutation,
} = academicManagementApi;
