import React from "react";
import StatusHandler from "./StatusHandler";
import {IJob} from "../models/Job";
import './Job.scss';

interface JobProps {
    job: IJob;
    deleteJob: (jobId: string) => void
    updateStatus: (newStatus: number, jobId: string) => void
}

export default function Job(props: JobProps) {

    const {job, deleteJob, updateStatus} = props;

    return (
        <div className="job">
            <div className="job-content">
                <p>
                    <span>{job.jobName}</span>
                    <span>{job.date}</span>
                </p>
                <button className="delete-button" onClick={() => {
                    deleteJob(job.jobId);
                }}>X
                </button>
            </div>
            <StatusHandler clicked={job.status} jobId={job.jobId} updateStatus={updateStatus}/>
        </div>
    );
}
