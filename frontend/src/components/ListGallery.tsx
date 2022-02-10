import React, {useEffect, useState} from "react";
import './ListGallery.scss';
import {getAllLists, removeItem, updateList} from "../services/BackendService";
import ListCategory from "./ListCategory";
import CompareHandler from "./CompareHandler";
import {IJobList} from "../models/JobList";
import {INewJob} from "../models/NewJob";


export default function ListGallery() {

    const [jobListsGallery, setJobListsGallery] = useState<IJobList[]>([]);

    useEffect(() => {
        getAllLists()
            .then((jobLists) => {
                setJobListsGallery(jobLists)
            })
    }, [])

    const addItem = (newItem: INewJob, listId: string): void => {
        /*setJobListsGallery((jobListGallery) =>
             jobListGallery.map((jobList) => {
                 if (jobList.listId === listId) {
                     return {
                         ...jobList, listItems: jobList.listItems ? [...jobList.listItems, newItem] : [newItem]
                     }
                 } else {
                     return jobList;
                 }
             })
         )

         */
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


    const deleteItem = (jobId: string, listId: string): void => {
        removeItem(listId, jobId)
            .then(() => {
                getAllLists()
                    .then((jobLists) => {
                        setJobListsGallery(jobLists)
                    })
            })

    }


    return (
        <div>
            <div className="list-gallery">
                {jobListsGallery.map((listCategory, key) => {
                    return <ListCategory jobList={listCategory} addItem={addItem} deleteItem={deleteItem} key={key}/>
                })}
            </div>
            <br/>
            <br/>
            <CompareHandler/>
        </div>
    );
}