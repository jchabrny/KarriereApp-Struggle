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
            <br/>
                <ListGallery />
            <br/>
            </div>
            <button type="submit" className="btn btn-dark btn-lg">COMPARE</button>
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
            <ListHandler />
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
 */