import React from "react";
import StatusHandler from "./StatusHandler";
import {IApplication} from "../models/Application";
import './Job.scss';
import {FaTrash} from 'react-icons/fa';

interface JobProps {
    job: IApplication;
    deleteJob: (jobId: string) => void
    updateStatus: (newStatus: number, jobId: string) => void
}

export default function Job(props: JobProps) {

    const {job, deleteJob, updateStatus} = props;

    return (
        <div className="job">
            <div className="job-content">
                <span>
                    <p>{job.jobName}</p>
                </span>
                <span>
                    <p>{job.date}</p>
                </span>
                    <button className="delete-button" onClick={() => {
                    deleteJob(job.jobId);
                }}><FaTrash/>
                </button>
            </div>
            <div className="status-container">
                <StatusHandler clicked={job.status} jobId={job.jobId} updateStatus={updateStatus}/>
            </div>
            <hr/>
        </div>
    );
}
