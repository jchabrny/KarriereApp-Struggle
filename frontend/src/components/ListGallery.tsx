import React, {ChangeEvent, useEffect, useState} from "react";
import './ListGallery.scss';
import {getAllLists, removeItem, removeList, saveNewList, updateList} from "../services/BackendService";
import ListCategory from "./ListCategory";
import {IJobList} from "../models/JobList";
import {INewJobList} from "../models/NewJobList";
import {INewJob} from "../models/NewJob";

const calculateScore = (jobList: IJobList): number => {
    let sum = 0;
    jobList.listItems?.forEach(job => {
        sum = sum + (job.status || 0)
    })
    return sum
}

export default function ListGallery() {

    const [listName, setListName] = useState<string>("");
    const [jobListsGallery, setJobListsGallery] = useState<IJobList[]>([]);
    const [winningListId, setWinningListId] = useState<string>("");

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

    useEffect(() => {
        winningList()
    }, [jobListsGallery])

    const winningList = (): void => {
        if (!jobListsGallery.length) return
        const listScore = jobListsGallery.map((jobList) => {
         return   {score: calculateScore(jobList), jobListId: jobList.listId}
        })
       listScore.sort((a, b) => {
           if(a.score < b.score) return 1
           if(a.score > b.score) return -1
           return 0;
       })
        setWinningListId(listScore[0].jobListId)
        console.log(listScore)
    }

    return (
        <div>
            <div className="compare-button-container">
                <button type="submit" className="btn btn-lg">COMPARE</button>
            </div>
            <br />
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
            <br />
            <div className="list-gallery">
                {jobListsGallery.map((listCategory, key) => {
                    return <ListCategory jobList={listCategory} addItem={addItem}
                                         updateJobList={updateJobList} deleteItem={deleteItem}
                                         deleteList={handleDelete} score={calculateScore(listCategory)} key={key} showTrophy={winningListId === listCategory.listId} />
                })}
            </div>
        </div>
    );
}