import React from 'react';
import './MainPage.scss';
import ListGallery from "../components/ListGallery";
import Navbar from "../components/Navbar";



export default function MainPage() {

    return (
        <div>
            <Navbar/>
            <div className="header">
                <br/>
                <h1>
                    career crack
                </h1>
                <h4>Choose a category and compare your job application lists. </h4>
                <p>You can compare your application success ...</p>
                <ul>
                    <li>... in different branches</li>
                    <li> or cities,</li>
                    <li>... regarding company sizes</li>
                    <li> or application formats.</li>
                </ul>
                <h5>Take your pick and get started !</h5>
                <br />
                <ListGallery />
            </div>
        </div>
    );
}