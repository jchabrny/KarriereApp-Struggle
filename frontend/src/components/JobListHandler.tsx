import React from "react";
import DynamicTable from "./DynamicTable";
import './JobListHandler.scss';

// With press button "start comparison" the three lists will be fed to database and then compared
export default function JobListHandler(){
    return (
       // <DynamicTable />
    <div className="button-container">
        <button type="submit" className="btn btn-dark btn-sm">COMPARE</button>
    </div>
    )

}