import React from "react";
import {IJob} from "../models/Job";
import './Job.scss';

interface JobProps {
    job: IJob;
    deleteJob(jobNameToDelete: string): void;
}

export default function Job(props: JobProps) {

    const {job, deleteJob} = props;

        return(
            <div className="job">
                <div className="content">
                    <span>{job.jobName}</span>
                    <span>{job.date}</span>
                </div>
                <button onClick={() => {deleteJob(job.jobName);}}>X</button>
            </div>
        );
    }
