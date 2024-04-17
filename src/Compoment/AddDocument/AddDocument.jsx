import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../utility/localstorage';
import { IoLocationSharp } from 'react-icons/io5';

const AddDocument = () => {

    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([])

    useEffect(()=>{
        const storedJobIds = getStoredJobApplication()
        if(jobs.length > 0)
        {
            const jobsApplied = []
            for (const id of storedJobIds)
            {
                const job = jobs.find(job => job.id ===id)
                if(job)
                {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied)
        }
    },[])

    return (
        <div>
            <h1 className='text-center mt-10 text-5xl font-bold text-red-800'>Real-Estate Properties</h1>
            <div>
            {
                    appliedJobs.map(job => <li key={job.id}>
                        
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={job.image} className="w-3/4 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">{job.estate_title}</h1>
      <p className="py-2">{job.description}</p>
      <p className="py-2 font-bold text-2xl">{job.segment_name}</p>
      <p className=" font-bold mt-3 mb-3 text-2xl">{job.price}</p>


        <div className='flex justify-between items-center states'>
            <h1>{job.area}</h1>
            <div className='flex gap-2 mt-2 mb-2'>
            <h1 className='text-xl'><IoLocationSharp/></h1> 
            <h1>{job.location}</h1>
            </div>
        </div>
        <h1 className='text-2xl font-bold mb-3'>{job.status}</h1>
        <div className='mb-3'>
            <ul>
                <li>1. {job.facilities[0]}</li>
                <li>2. {job.facilities[1]}</li>
                <li>3. {job.facilities[2]}</li>
            </ul>
        </div>
      <Link to={'/'}> <button className='btn btn-primary mt-5'>Back Home Page</button></Link>
    </div>
  </div>
</div>

                    </li>)
                }
            </div>
               
            
        </div>
    );
};

export default AddDocument;