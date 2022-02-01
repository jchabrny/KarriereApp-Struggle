import React from "react";
import {IJob} from "../models/Job";
import './DynamicColumn.scss';

interface Props {
    job: IJob;
    deleteJob(jobNameToDelete: string): void;
}

export default function DynamicColumn({job, deleteJob}: Props) {

    return (
        <div className="job">
            <div className="job-content">
                            <span>{job.jobName}</span>
                            <span>{job.date}</span>
                <div className="delete-button">
                        <button onClick={() => {
                            deleteJob(job.jobName);
                        }}>X
                        </button>
                </div>
            </div>
        </div>
    );
}
