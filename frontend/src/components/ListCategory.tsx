import React, {ChangeEvent, useState} from "react";
import Job from "./Job";
import {IJobList} from "../models/JobList";
import './ListCategory.scss';
import {IJob} from "../models/Job";


interface ListCategoryProps {
    jobList: IJobList
}


export default function ListCategory(props: ListCategoryProps) {

   const {jobList} = props;

    const [itemName, setItemName] = useState<string>("");
    const [itemDate, setItemDate] = useState<string>("");
    const [listCategory, setListCategory] = useState<IJob[]>([]);


    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.value === "itemName") {
            setItemName(event.target.value) }
        else {
            setItemDate(event.target.value)
        }
    };

    const addItem = (): void => {
        const newItem = { jobName: itemName, date: itemDate};
        setListCategory([...listCategory, newItem]);
    };

    const deleteItem = (): void => {

    };

    return (
        <div className="list-category">
            <h3>{jobList.listName}</h3>
            <p>Job 1</p>
            <ul className="jobs">
                {jobList.listItems?.map((job, key) => {
                    return <Job key={key} job={job} deleteJob={deleteItem}/>
                })}
            </ul>
            <div className="input-container">
            <input type="text" placeholder="Enter a job..." name="itemName" value={itemName} onChange={handleChange}/>
            <input type="month" name="itemDate" value={itemDate} onChange={handleChange}/>
            <button className="btn btn-dark btn-md"  onClick={addItem}>Add job</button>
            </div>
        </div>
    )
}