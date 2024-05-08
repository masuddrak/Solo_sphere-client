import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import axios from "axios";
const TabCatagorys = () => {
    const [jobs, setJobs] = useState([])


    useEffect(() => {
        const fackData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
            setJobs(data)
        }
        fackData()
    }, [])
    return (
        <div>
            <Tabs>
                <div className="w-2/4 mx-auto mb-6">
                    <div className="flex justify-center">
                        <TabList >
                            <Tab>Web Development</Tab>
                            <Tab>Graphics Design</Tab>
                            <Tab>Digital Marketing</Tab>
                        </TabList>
                    </div>
                </div>

                <TabPanel>
                    <div className="grid grid-cols-3 gap-6">
                        {
                            jobs.filter(j => j.category === "Web Development").map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-3 gap-6">
                        {
                            jobs.filter(j => j.category === "Graphics Design").map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-3 gap-6">
                        {
                            jobs.filter(j => j.category === "Digital Marketing").map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabCatagorys;