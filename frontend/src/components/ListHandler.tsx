import React, {ChangeEvent, useState} from "react";
import {IJobList} from "../models/JobList";
import {updateList} from "../services/BackendService";
import './ListHandler.scss';


export default function ListHandler(){
    const [newItemName, setNewItemName] = useState("");
    const [list, setList] = useState<IJobList>({listName: "", listId: "", listItems: []});

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setNewItemName(event.currentTarget.value);
    }

    function handleAdd() {
        setList({...list, listItems: [...list.listItems, {jobName: newItemName}]});
        updateList({...list, listItems: [...list.listItems, {jobName: newItemName}]});
    }

    return (
        <div>
            <div className="addItem">
                <input
                    value={newItemName}
                    placeholder="Enter job"
                    type="text"
                    onChange={handleChange}
                />
                <button
                    type="button"
                    onClick={handleAdd}
                    className="btn btn-dark btn-sm"
                >
                    Add job
                </button>
            </div>
            <br/>
            <ol>
                {list.listItems.map((item, index) => (
                    <li key={index}>
                        {item.jobName} <input type="checkbox" defaultChecked={false}/>
                    </li>
                ))}
            </ol>
        </div>
    );
}
