import React, {ChangeEvent, useEffect, useState} from "react";
import './ListGallery.scss';
import {getAllLists, removeItem, removeList, saveNewList, updateList} from "../services/BackendService";
import ListCategory from "./ListCategory";
import CompareHandler from "./CompareHandler";
import {IJobList} from "../models/JobList";
import {INewJobList} from "../models/NewJobList";
import {INewJob} from "../models/NewJob";


export default function ListGallery() {

    const [listName, setListName] = useState<string>("");
    const [listId, setListId] = useState<string>("")
    const [jobListsGallery, setJobListsGallery] = useState<IJobList[]>([]);

    useEffect(() => {
        getAllLists()
            .then((jobLists) => {
                setJobListsGallery(jobLists)
            })
    }, [])

    const addItem = (newItem: INewJob, listId: string): void => {
        const jobList = jobListsGallery.find((jobList) => jobList.listId === listId)
        if (jobList) {
            updateList({...jobList, listItems: jobList.listItems ? [...jobList.listItems, newItem] : [newItem]})
                .then(() => {
                    getAllLists()
                        .then((jobLists) => {
                            setJobListsGallery(jobLists)
                        })
                })
        }
    }

    const updateJobList = (jobList: IJobList): void => {
        updateList(jobList)
            .then(() => {
                getAllLists()
                    .then((jobLists) => {
                        setJobListsGallery(jobLists)
                    })
            })
    }

    const deleteItem = (jobId: string, listId: string): void => {
        removeItem(listId, jobId)
            .then(() => {
                getAllLists()
                    .then((jobLists) => {
                        setJobListsGallery(jobLists)
                    })
            })
    }

    const handleNewList = (event: ChangeEvent<HTMLInputElement>): void => {
        setListName(event.target.value)
        setListId(event.target.value)
    };

    const handleAddList = (): void => {
        const newJobList: INewJobList = {
            listName: listName
        }
        saveNewList(newJobList)
            .then(() => {
                getAllLists()
                    .then((jobLists) => {
                        setJobListsGallery(jobLists)
                    })
            })
    };

    const handleDelete = (listId: string): void => {
        removeList(listId)
            .then(() => {
                getAllLists()
                    .then((jobLists) => {
                        setJobListsGallery(jobLists)
                    })
            })
    };

    return (
        <div>
            <CompareHandler/>
            <div className="new list-creator">
                <form action="">
                    <input type="text"
                           className="new list"
                           placeholder="Enter new list"
                           aria-label="new list"
                           onChange={handleNewList}
                    />
                    <button className="btn-create" aria-label="create new list" onClick={handleAddList}>+</button>
                </form>
            </div>
            <br/>
            <div className="list-gallery">
                {jobListsGallery.map((listCategory, key) => {
                    return <ListCategory jobList={listCategory} addItem={addItem}
                                         updateJobList={updateJobList} deleteItem={deleteItem}
                                         deleteList={handleDelete} key={key}/>
                })}
            </div>
        </div>
    );
}