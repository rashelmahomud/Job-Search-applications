import React from 'react';
import { useSelector } from 'react-redux';
import JobCard from '../../components/JobCard';
import Loading from '../../components/reusable/Loading';
import { useGetAppliedJobsQuery } from '../../features/job/jobApi';

const AppliedJobs = () => {
    const { user: { email } } = useSelector((state) => state.auth);
    
    const { data, isLoading } = useGetAppliedJobsQuery(email);

console.log(data);
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='grid lg:grid-cols-2 gap-10 mt-5'>
            {
                data?.data?.map((job) => <JobCard job={job} />)
            }
        </div>
    );
};

export default AppliedJobs;