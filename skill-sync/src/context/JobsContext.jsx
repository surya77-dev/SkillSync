import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react';

export const PostContext = React.createContext();


export const JobsProvider = ({children}) => {
const [Jobs, setJobs] = useState([])



useEffect(() => {
  const storedJobs = JSON.parse(localStorage.getItem("jobpost") || '[]')
    setJobs(storedJobs)

}, [])


 useEffect(() => {
    localStorage.setItem("jobpost", JSON.stringify(Jobs));
  }, [Jobs]);

const storeJob = (formData) => {
    const jobWithId = {
        ...formData,
        id: crypto.randomUUID(),
        postedAt: new Date().toISOString()
    };
    setJobs((prevjobs)=>[...prevjobs, jobWithId]);
}

const removeJob = (id) => {
setJobs((prevjobs) => prevjobs.filter(job => job.id !== id))
}

 return (
    <PostContext.Provider value={{ Jobs, storeJob, removeJob }}>
      {children}
    </PostContext.Provider>
  );
};

export default JobsProvider;