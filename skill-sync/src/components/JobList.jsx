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
  const fetchOrLoadJobs = async () => {
    const cached = localStorage.getItem('freelancers');

    if (cached) {
      const parsed = JSON.parse(cached);
      setjobBrowse(parsed);
      setfilteredJobs(parsed);
      setLoading(false);
    } else {
      try {
        const res = await fetch('https://randomuser.me/api/?results=99');
        const data = await res.json();

        const enriched = data.results.map(enrichUser);

        // Save to localStorage
        localStorage.setItem('freelancers', JSON.stringify(enriched));

        setjobBrowse(enriched);
        console.log(enriched);
        setfilteredJobs(enriched);
        setLoading(false);
      } catch (err) {
        console.error('Fetch failed:', err);
        setLoading(false);
      }
    }
  };

  fetchOrLoadJobs();
}, []);


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