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
            <div className="new list-creator">
                <form action="">
                    <input type="text"
                           className="new list"
                           placeholder="Enter new list"
                           aria-label="new list"
                    />
                    <button className="btn-create" aria-label="create new list">+</button>
                </form>
            </div>
        </div>

    )

}

/*
<br/>
<h3>{jobList.listName}</h3>
 */