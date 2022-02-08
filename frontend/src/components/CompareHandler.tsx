import React from "react";
import './CompareHandler.scss';


// With press button "start comparison" the three lists will be fed to database and then compared
export default function CompareHandler(){

    /*
    ArrayLength

    <button id="array-length">Compare </button>
    const arrayLength = document.getElementById('array-length');
    arrayLength.addEventListener('click', length);

    function length()

    const firstArray = [job1, job4, job5];
    console.log(firstArray.length);
    const secondArray = [job2, job3, job6, job7]


     */

    return (
    <div className="button-container">
        <button type="submit" className="btn btn-dark btn-lg">COMPARE</button>
    </div>
    )

}