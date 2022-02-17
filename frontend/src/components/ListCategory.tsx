import React, {ChangeEvent, useState} from "react";
import Job from "./Job";
import ProgressBar from "./ProgressBar";
import {IJobList} from "../models/JobList";
import './ListCategory.scss';
import {INewJob} from "../models/NewJob";
import {FaArchive, FaTrophy} from 'react-icons/fa';


interface ListCategoryProps {
    jobList: IJobList
    addItem: (newItem: INewJob, listId: string) => void
    deleteItem: (jobId: string, listId: string) => void
    deleteList: (listId: string) => void
    updateJobList: (jobList: IJobList) => void
    score: number
    showTrophy: boolean
}

export default function ListCategory(props: ListCategoryProps) {

    const {jobList, addItem, deleteItem, deleteList, updateJobList, score, showTrophy} = props;

    const [itemName, setItemName] = useState<string>("");
    const [itemDate, setItemDate] = useState<string>("");

    const updateScore = (newStatus: number, jobId: string): void => {
        const newJobList = {...jobList}
        const job = newJobList.listItems?.find((job) => job.jobId === jobId)
        if (job) {
            job.status = newStatus
            updateJobList(newJobList)
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "itemName") {
            setItemName(event.target.value)
        } else {
            setItemDate(event.target.value)
        }
    };

    const handleAdd = (): void => {
        const newItem = {jobName: itemName, date: itemDate, status: 1};
        addItem(newItem, jobList.listId)
    };

    const handleDelete = (jobId: string): void => {
        deleteItem(jobId, jobList.listId);
    };

    return (
        <div className="list-category">
            <span className="list-head-container">
            <ProgressBar score={score}/>
               <h3>{showTrophy && <FaTrophy color="#AC7D0C"/>}{jobList.listName}</h3>
                     <button className="delete-button" onClick={() => {
                         deleteList(jobList.listId);
                     }}><FaArchive/>
            </button>
                 </span>
            <div className="jobs">
                <div className="input-container">
                    <input type="text" placeholder="Enter a job..." name="itemName" value={itemName}
                           onChange={handleChange}/>
                    <input type="month" name="itemDate" value={itemDate} onChange={handleChange}/>
                    <button className="btn btn-dark btn-md" onClick={handleAdd}>Add job</button>
                </div>
                <div className="scroll-div">
                    <ul className="list-group">
                        <li className="list-group-item">
                            {jobList.listItems?.map((job, key) => {
                                return <Job key={key} job={job} deleteJob={handleDelete}
                                            updateStatus={updateScore}/>
                            })}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

