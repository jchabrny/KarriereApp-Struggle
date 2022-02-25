import React from "react";
import './ProgressBar.scss';
import {IJobCategory} from "../models/JobCategory";

interface ProgressBarProps {
    jobList: IJobCategory
    score: number
}

export default function ProgressBar(props: ProgressBarProps) {

    const {score} = props;

    return (
        <div>
            <progress max={50} value={score}>
            </progress>
        </div>
    );
}