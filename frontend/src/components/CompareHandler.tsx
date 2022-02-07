import React from "react";
import './CompareHandler.scss';


// With press button "start comparison" the three lists will be fed to database and then compared
export default function CompareHandler(){
    return (
    <div className="button-container">
        <button type="submit" className="btn btn-dark btn-lg">COMPARE</button>
    </div>
    )

}