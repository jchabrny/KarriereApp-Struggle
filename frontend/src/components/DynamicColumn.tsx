import React from "react";
import {IJob} from "../models/Job";
import './DynamicColumn.scss';

interface Props {
    job: IJob;

    deleteJob(jobNameToDelete: string): void;
}

export default function DynamicColumn({job, deleteJob}: Props) {

    return (
        <div className="job-container">
            <div className="content">
                            <span>{job.jobName}</span>
                            <span>{job.date}</span>
                <div>
                        <button onClick={() => {
                            deleteJob(job.jobName);
                        }}>X
                        </button>
                </div>
            </div>
        </div>
    );
}

/*
const [input, setInput] = useState("");
const [job, setJob] = useState("");

const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInput(event.target.value);
}

const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setJob(input);
};

return (
    <div className="container">
        <table>
            <thead>
            <tr>
                <th>Branche A</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{job}</td>
            </tr>
            </tbody>
        </table>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter job"
                value={input}
                onChange={handleChange}
                className="form-control"
                autoFocus={true}
                maxLength={30}
            />
            <button type="submit" className="btn btn-dark btn-sm">
                Save
            </button>
        </form>
    </div>
);
}
*/
