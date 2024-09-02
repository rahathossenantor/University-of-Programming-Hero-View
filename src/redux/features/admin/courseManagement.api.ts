import { TSemesterRegistration } from "../../../types/courseManagement.types";
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
    }),
});

export const {
    useCreateSemesterRegistrationMutation,
    useGetAllSemesterRegistrationsQuery,
    useUpdateSemesterRegistrationStatusMutation,
} = courseManagementApi;
