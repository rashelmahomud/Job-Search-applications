import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetJobsQuery } from "../features/job/jobApi";

const Jobs = () => {
  const navigate = useNavigate();
  const { data, isError, isLoading } = useGetJobsQuery();

  return (
    <div className='pt-14'>

      <h1 className="text-2xl bg-gray-300 p-3 max-w-7xl mx-auto rounded-full font-bold">Find Jobs</h1>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        {

          data?.data?.map(({ _id, position, companyName, location, employmentType }) => <div className="shadow-lg p-4 mt-5 rounded">
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold text-xl">{position}</h1>
                <p>by <span className="font-bold">{companyName}</span></p>
              </div>
              <h1 className="">{location}</h1>
            </div>
            <div className="flex justify-between mt-5">
              <h1>Full Time</h1>
              <button className='border p-2 rounded font-bold' onClick={() => navigate(`/job-details/${_id}`)}>
                Details
              </button>
            </div>
          </div>)

        }
      </div>
    </div>
  );
};

export default Jobs;
