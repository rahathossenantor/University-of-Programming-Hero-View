import baseApi from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // student APIs
        createStudent: builder.mutation({
            query: (student) => ({
                url: "/users/create-student",
                method: "POST",
                body: student
            })
        }),
    })
});

export const {
    useCreateStudentMutation
} = userManagementApi;
