import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AgendaPage from "./pages/AgendaPage";
import './App.scss';



export default function App() {

    return (
        <div className="App">
            <div className="container">
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="agenda" element={<AgendaPage />}/>
                </Routes>
            </div>
        </div>
    );
}
