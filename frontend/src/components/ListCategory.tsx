import React, {ChangeEvent, useState} from "react";
import Job from "./Job";
import {IJobList} from "../models/JobList";
import './ListCategory.scss';
import {INewJob} from "../models/NewJob";

const calculateScore = (jobList: IJobList): number => {
    let sum = 0;
  jobList.listItems?.forEach(job => {
      sum = sum + (job.status||0)
  })
    return sum

}

interface ListCategoryProps {
    jobList: IJobList
    addItem: (newItem: INewJob, listId: string) => void
    deleteItem: (jobId: string, listId: string) => void
    deleteList: (listId: string) => void
    updateJobList: (jobList: IJobList) => void
}

export default function ListCategory(props: ListCategoryProps) {

    const {jobList, addItem, deleteItem, deleteList, updateJobList} = props;

    const [itemName, setItemName] = useState<string>("");
    const [itemDate, setItemDate] = useState<string>("");
    const score = calculateScore(jobList)

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
           <span>
               <h3>{jobList.listName}</h3>
               <p>{score}</p>
            <button className="delete-button" onClick={() => {
                deleteList(jobList.listId);
            }}>X
            </button>
           </span>
            <div className="input-container">
                <input type="text" placeholder="Enter a job..." name="itemName" value={itemName}
                       onChange={handleChange}/>
                <input type="month" name="itemDate" value={itemDate} onChange={handleChange}/>
                <button className="btn btn-dark btn-md" onClick={handleAdd}>Add job</button>
            </div>
            <br/>
            <ul className="jobs">
                {jobList.listItems?.map((job, key) => {
                    return <Job key={key} job={job} deleteJob={handleDelete} updateStatus={updateScore}/>
                })}
            </ul>
            <br/>
            <br/>
        </div>
    )
}

