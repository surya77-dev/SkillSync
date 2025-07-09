import React from 'react'
import { useState, useEffect } from 'react'
import enrichUser from '../data/EnrichUser';
import JobCards from './JobCards';

const JobList = () => {
    const [jobBrowse, setjobBrowse] = useState({});
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJobs = async () => {
            try{
                const res = await fetch('https://randomuser.me/api/?results=20')
                const data = await res.json();

                const enriched = data.results.map(enrichUser)
                setjobBrowse(enriched)
                console.log(enriched)
                setLoading(false)
            } catch (err) {
                console.log(err)
                setLoading(true)
            }
            
        }
      fetchJobs();
    }, [])
    
  return (
    <JobCards jobBrowse={jobBrowse} Loading={Loading} />
  )
}

export default JobList