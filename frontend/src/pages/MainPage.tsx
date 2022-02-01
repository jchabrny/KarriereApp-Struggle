import React from 'react';
import './MainPage.scss';
import JobHandler from "../components/JobHandler";
import DynamicTable from "../components/DynamicTable";
import data from '../mock-data.json';
import TaskHandler from "../components/TaskHandler";

type Data = typeof data


// Dynamic table
export default function MainPage({data}: { data: Data }) {

    return (
        <div className="header">
            <h1>
                career crack
            </h1>
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
            <div className="job-container">
                <DynamicTable data={data}/>
            </div>
            <TaskHandler />
        </div>
    );
}