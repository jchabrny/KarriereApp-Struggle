import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import './App.scss';


export default function App() {

    return (
        <div className="App">
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                </Routes>
            </div>
        </div>
    );
}
