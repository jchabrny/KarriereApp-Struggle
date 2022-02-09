import './ListCategory.scss';
import React from "react";
import {IJobList} from "../models/JobList";

interface ListHandlerProps {
    jobList: IJobList
}

export default function ListHandler(props: ListHandlerProps) {

    const {jobList} = props;

    return (
        <div>
            <form className="content">
                <label>List Title: </label>
                <input type="text"
                       placeholder="Enter title" />
            </form>
            <br />
            <h3>{jobList.listName}</h3>
        </div>

    )

}