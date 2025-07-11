import React from 'react'
import { useState, useEffect } from 'react'
import enrichUser from '../data/EnrichUser';
import JobCards from './JobCards';
import Searchbar from './Searchbar';

const JobList = () => {
    const [jobBrowse, setjobBrowse] = useState([]);
    const [filteredJobs, setfilteredJobs] = useState([])
    const [filters, setfilters] = useState({
      jobTitle : "",
      skill : ""
    })
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJobs = async () => {
            try{
                const res = await fetch('https://randomuser.me/api/?results=99')
                const data = await res.json();

                const enriched = data.results.map(enrichUser)
                setjobBrowse(enriched)
                setfilteredJobs(enriched)
                console.log(enriched)
                setLoading(false)
            } catch (err) {
                console.log(err)
                setLoading(true)
            }
            
        }
      fetchJobs();
    }, [])

    useEffect(() => {
      const filtered = jobBrowse.filter((freelancer) => {
        const jobMatch = freelancer.jobTitle
          .toLowerCase()
          .includes(filters.jobTitle.toLowerCase());
        const skillMatch = freelancer.skills
          ? freelancer.skills.some(skill =>
              skill.toLowerCase().includes(filters.skill.toLowerCase())
            )
          : false;

        return jobMatch && skillMatch;
      });

      setfilteredJobs(filtered);
    }, [filters, jobBrowse]);
        
    
  return (
    <>
    <Searchbar filters={filters} setFilters={setfilters} />
    <JobCards jobBrowse={filteredJobs} Loading={Loading} />
    </>
  )
}

export default JobList