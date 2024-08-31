import { TDataResWithRedux, TQueryParam } from "../../../types/types.global";
import { TStudent } from "../../../types/userManagement.types";
import baseApi from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // admin APIs
        createAdmin: builder.mutation({
            query: (admin) => ({
                url: "/users/create-admin",
                method: "POST",
                body: admin,
            })
        }),

        // student APIs
        createStudent: builder.mutation({
            query: (student) => ({
                url: "/users/create-student",
                method: "POST",
                body: student,
            })
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

    useCreateStudentMutation,
    useGetAllStudentsQuery,
    useGetSingleStudentQuery,
} = userManagementApi;
