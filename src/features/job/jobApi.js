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
            invalidatesTags: ['job'],
        }),
        reply: builder.mutation({
            query: (data) => ({
                method: 'PATCH',
                url: '/reply',
                body: data
            }),
            invalidatesTags: ['job'],  //realtime loading for this line onli.. and main apiSlic a akto code asa atar jonno ar
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
            providesTags: ['job'],
        }),


    }),
});

export const { usePostJobMutation, useGetByIdQuery, useGetJobsQuery, useApplyJobMutation, useGetAppliedJobsQuery, useQuestionMutation, useReplyMutation } = jobApi;

