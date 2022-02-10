import React from "react";
import {IJob} from "../models/Job";
import './Job.scss';

interface JobProps {
    job: IJob;
    deleteJob: (jobId: string) => void

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
                    deleteJob(job.jobId);
                }}>X
                </button>
            </div>
            <div className="job-status">
                <div className="status">
                    <input type="checkbox"
                           id="ka"/>
                    <label htmlFor="ka">NR
                        <span className="checkbox ka"></span>
                    </label>
                </div>
                <div className="status">
                    <input type="checkbox"
                           id="no"/>
                    <label htmlFor="no">
                        No<span className="checkbox no"></span>
                    </label>
                </div>
                <div className="status">
                    <input type="checkbox"
                           id="yes"/>
                    <label htmlFor="yes">
                        Yes<span className="checkbox yes"></span>
                    </label>
                </div>
            </div>
        </div>
    );
}
