import React from 'react';
import './MainPage.scss';
import ListGallery from "../components/ListGallery";
import Navbar from "../components/Navbar";


//button dummy (real compare-button is in CompareHandler
export default function MainPage() {

    return (
        <div>
            <Navbar/>
            <div className="header">
            <br/>
            <h1>
                career crack
            </h1>
                <p>Choose a category and compare your job application lists</p>
            <br/>
                <ListGallery />
            </div>
        </div>
    );
}