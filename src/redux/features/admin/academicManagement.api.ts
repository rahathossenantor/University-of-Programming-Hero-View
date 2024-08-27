import { TAcademicSemesterRes } from "../../../types/academicMangement.types";
import { TDataResWithRedux, TQueryParam } from "../../../types/types.global";
import baseApi from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
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
