import React, {ChangeEvent, useState} from "react";
import {IJob} from "../models/Job";
import DynamicColumn from "./DynamicColumn";
import './JobHandler.scss';


export default function JobHandler() {

    const [job, setJob] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [jobList, setJobList] = useState<IJob[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "job") {
            setJob(event.target.value)
        } else {
            setDate(event.target.value);
        }
    };

    const addJob = (): void => {
        const newJob = {jobName: job, date: date};
        setJobList([...jobList, newJob]);
        setJob("");
        setDate("");
    };

    const deleteJob = (jobNameToDelete: string): void => {
        setJobList(
            jobList.filter((job) => {
                return job.jobName != jobNameToDelete
            })
        );
    };

    return (
        <div>
            <div className="job-list-container">
                {jobList.map((job: IJob, key) => {
                    return <DynamicColumn key={key} job={job} deleteJob={deleteJob}/>;
                })}
            </div>
            <div className="job-input">
                <input type="text" placeholder="Job..." name="job" value={job} onChange={handleChange}/>
                <input type="month" name="date" value={date} placeholder="Deadline (in Days)..."
                       onChange={handleChange}/>
                <button type="submit" className="btn btn-dark btn-sm" onClick={addJob}>Add Job</button>
            </div>
        </div>
    );
}

