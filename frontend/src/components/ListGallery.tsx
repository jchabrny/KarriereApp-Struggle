import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import './ListGallery.scss';
import {getAllLists, removeItem, removeList, saveNewList, updateList} from "../services/BackendService";
import ListCategory from "./ListCategory";
import {IJobCategory} from "../models/JobCategory";
import {INewJobCategory} from "../models/NewJobCategory";
import {INewApplication} from "../models/NewApplication";

const calculateScore = (jobList: IJobCategory): number => {
    let sum = 0;
    jobList.listItems?.forEach(job => {
        sum = sum + (job.status || 0)
    })
    return sum
}

export default function ListGallery() {

    const [listName, setListName] = useState<string>("");
    const [jobListsGallery, setJobListsGallery] = useState<IJobCategory[]>([]);
    const [winningListId, setWinningListId] = useState<string>("");

    useEffect(() => {
        getAllLists()
            .then((jobLists) => {
                setJobListsGallery(jobLists)
            })
    }, [])

    const addItem = (newItem: INewApplication, listId: string): void => {
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

    const updateJobList = (jobList: IJobCategory): void => {
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
    };

    const handleAddList = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        const newJobList: INewJobCategory = {
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

    useEffect(() => {
        winningList()
        //eslint-disable-next-line
    }, [jobListsGallery])

    const winningList = (): void => {
        if (!jobListsGallery.length) return
        const listScore = jobListsGallery.map((jobList) => {
            return {score: calculateScore(jobList), jobListId: jobList.listId}
        })
        listScore.sort((a, b) => {
            if (a.score < b.score) return 1
            if (a.score > b.score) return -1
            return 0;
        })
        setWinningListId(listScore[0].jobListId)
    }

    return (
        <div>
            <div className="new-list-creator">
                <form onSubmit={handleAddList}>
                    <button type="submit" className="btn-create" aria-label="create new list">+</button>
                    <input type="text"
                           className="new list"
                           placeholder="Enter new list"
                           aria-label="new list"
                           onChange={handleNewList}
                    />
                </form>
            </div>
            <div className="list-gallery">
                {jobListsGallery.map((listCategory, key) => {
                    return <ListCategory jobList={listCategory} addItem={addItem}
                                         updateJobList={updateJobList} deleteItem={deleteItem}
                                         deleteList={handleDelete} score={calculateScore(listCategory)}
                                         key={key} showTrophy={winningListId === listCategory.listId} />
                })}
            </div>
        </div>
    );
}