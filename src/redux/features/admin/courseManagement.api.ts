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
        }),
    }),
});

export const {
    useCreateSemesterRegistrationMutation,
} = courseManagementApi;
