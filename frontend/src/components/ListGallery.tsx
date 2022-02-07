import React, {useEffect, useState} from "react";
import './ListGallery.scss';
import {getAllLists} from "../services/BackendService";
import ListCategory from "./ListCategory";
import CompareHandler from "./CompareHandler";
import {IJobList} from "../models/JobList";


export default function ListGallery() {

    const [jobListsGallery, setJobListsGallery] = useState<IJobList[]>([]);

    useEffect(() => {
        getAllLists()
            .then((jobLists) => {
                setJobListsGallery(jobLists)
            })
    }, [])

    return (
        <div>
        <div className="list-gallery">
            {jobListsGallery.map((listCategory, key) => {
                return <ListCategory jobList={listCategory} key={key}/>
            })}
        </div>
        <br/>
        <CompareHandler />
        </div>
    );
}