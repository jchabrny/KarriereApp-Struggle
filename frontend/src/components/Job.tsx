import React from "react";
import {IJob} from "../models/Job";
import './Job.scss';

interface JobProps {
    job: IJob;

    deleteJob(itemNameToDelete: string): void;
}

export default function Job(props: JobProps) {

    const {job, deleteJob} = props;

    return (
        <div className="job">
            <div className="job-content">
                <p>
                    <span>{job.jobName}</span>
                    <span>{job.date}</span>
                </p>
                <button className="delete-button" onClick={() => {
                    deleteJob(job.jobName);
                }}>X
                </button>
            </div>
        </div>
    );
}
