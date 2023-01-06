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

        question: builder.mutation({
            query: (data) => ({
                method: 'PATCH',
                url: '/query',
                body: data
            }),
        }),
        reply: builder.mutation({
            query: (data) => ({
                method: 'PATCH',
                url: '/reply',
                body: data
            }),
        }),

        getJobs: builder.query({
            query: () => ({
                url: "/jobs",
            }),
        }),
        getAppliedJobs: builder.query({
            query: (email) => ({
                url: `/applied-jobs/${email}`,
            }),
        }),
        getById: builder.query({
            query: (id) => ({
                url: `/job/${id}`,
            }),
        }),


    }),
});

export const { usePostJobMutation, useGetByIdQuery, useGetJobsQuery, useApplyJobMutation, useGetAppliedJobsQuery, useQuestionMutation, useReplyMutation } = jobApi;

