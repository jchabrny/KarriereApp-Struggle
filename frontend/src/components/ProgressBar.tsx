import React from "react";
import './ProgressBar.scss';
import {IJobList} from "../models/JobList";

interface ProgressBarProps {
    jobList: IJobList
    score: number
}

export default function ProgressBar(props: ProgressBarProps) {

    const {jobList, score} = props;
    const max = (jobList.listItems?.length || 0 ) * 3;

    return (
        <div>
            <progress max={max} value={score}>
            </progress>
        </div>
    );
}