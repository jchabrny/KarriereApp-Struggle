import React from "react";
import './ProgressBar.scss';

interface ProgressBarProps {
    score: number
}

export default function ProgressBar(props: ProgressBarProps) {

    const {score} = props;

    return (
        <div>
            <progress max="50" value={score}>
            </progress>
        </div>
    );
}

/*
div className="progress-bar-container">
    <div className="progress-bar">{score}%</div>
</div>
 */