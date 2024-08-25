import baseApi from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllAcademicSemesters: builder.query({
            query: () => ({
                url: "/academic-semesters",
                method: "GET"
            })
        }),
        createAcademicSemester: builder.mutation({
            query: (academicSemester) => ({
                url: "/academic-semesters/create-academic-semester",
                method: "POST",
                body: academicSemester
            })
        }),
    })
});

export const { useCreateAcademicSemesterMutation, useGetAllAcademicSemestersQuery } = academicManagementApi;
