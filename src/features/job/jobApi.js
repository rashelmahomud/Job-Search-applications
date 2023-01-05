import apiSlice from "../api/apiSlice";


export const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postJob: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/job',
                body: data
            }),
        }),
        applyJob: builder.mutation({
            query: (data) => ({
                method: 'PATCH',
                url: '/apply',
                body: data
            }),
        }),

        getJobs: builder.query({
            query: () => ({
                url: "/jobs",
            }),
        }),
        getById: builder.query({
            query: (id) => ({
                url: `/job/${id}`,
            }),
        }),


    }),
});

export const { usePostJobMutation, useGetByIdQuery, useGetJobsQuery, useApplyJobMutation } = jobApi;

