import React, {ChangeEvent, useState} from "react";
import Job from "./Job";
import {IJobList} from "../models/JobList";
import './ListCategory.scss';
import {INewJob} from "../models/NewJob";


interface ListCategoryProps {
    jobList: IJobList
    addItem: (newItem: INewJob, listId: string) => void
    deleteItem: (jobId: string, listId: string) => void
}

export default function ListCategory(props: ListCategoryProps) {

    const {jobList, addItem, deleteItem} = props;

    const [itemName, setItemName] = useState<string>("");
    const [itemDate, setItemDate] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "itemName") {
            setItemName(event.target.value)
        } else {
            setItemDate(event.target.value)
        }
    };

    const handleAdd = (): void => {
        const newItem = {jobName: itemName, date: itemDate};
        addItem(newItem, jobList.listId)
    };

    const handleDelete = (jobId: string): void => {
        deleteItem(jobId, jobList.listId);
    };

    return (
        <div className="list-category">
            <h3>{jobList.listName}</h3>
            <div className="input-container">
                <input type="text" placeholder="Enter a job..." name="itemName" value={itemName}
                       onChange={handleChange}/>
                <input type="month" name="itemDate" value={itemDate} onChange={handleChange}/>
                <button className="btn btn-dark btn-md" onClick={handleAdd}>Add job</button>
            </div>
            <br />
            <ul className="jobs">
                {jobList.listItems?.map((job, key) => {
                    return <Job key={key} job={job} deleteJob={handleDelete}/>
                })}
            </ul>
            <br />
            <br />
        </div>
    )
}

