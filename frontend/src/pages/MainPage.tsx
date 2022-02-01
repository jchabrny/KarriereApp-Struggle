import React from 'react';
import './MainPage.scss';
import DynamicTable from "../components/DynamicTable";
import TaskHandler from "../components/TaskHandler";


//button dummy (real compare-button is in JobListHandler
export default function MainPage() {

    return (
        <div className="header">
            <h1>
                career crack
            </h1>
            <div className="job-container">
                <DynamicTable />
            </div>
            <button type="submit" className="btn btn-dark btn-lg">COMPARE</button>
            <br/>
            <br/>
            <br/>
            <TaskHandler />
        </div>
    );
}

/*
<div>
            <table>
                <thead>
                <tr>
                    <th>Pharma</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
            <JobHandler />
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
 */