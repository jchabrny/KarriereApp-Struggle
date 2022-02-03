import React from "react";
import ListGallery from "./ListGallery";
import './CompareHandler.scss';


// With press button "start comparison" the three lists will be fed to database and then compared
export default function CompareHandler(){
    return (
       // <ListGallery />
    <div className="button-container">
        <button type="submit" className="btn btn-dark btn-sm">COMPARE</button>
    </div>
    )

}