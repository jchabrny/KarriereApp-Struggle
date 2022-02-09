import React, {ChangeEvent, useState} from "react";
import ListHandler from "./ListHandler";
import Job from "./Job";
import {IJobList} from "../models/JobList";
import './ListCategory.scss';
import {IJob} from "../models/Job";


interface ListCategoryProps {
    jobList: IJobList
    addItem: (newItem: IJob, listId: string) => void
}


export default function ListCategory(props: ListCategoryProps) {

    const {jobList, addItem} = props;


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

    const handleDelete = (): void => {

    };

    /*
     const handleDelete = (itemNameToDelete: string): void => {
        deleteItem(
            jobList.listId.filter((item) => {
            return item.itemName !== itemNameToDelete
        })
        );
    };
     */

    return (
        <div className="list-category">
            <ListHandler jobList={jobList} />
            <ul className="jobs">
                {jobList.listItems?.map((job, key) => {
                    return <Job key={key} job={job} deleteJob={handleDelete}/>
                })}
            </ul>
            <div className="input-container">
                <input type="text" placeholder="Enter a job..." name="itemName" value={itemName}
                       onChange={handleChange}/>
                <input type="month" name="itemDate" value={itemDate} onChange={handleChange}/>
                <button className="btn btn-dark btn-md" onClick={handleAdd}>Add job</button>
            </div>
        </div>
    )
}
