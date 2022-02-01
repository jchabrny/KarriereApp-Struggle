import React from 'react';
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import './App.scss';

export default function App() {

    return (
        <div className="App">
            <Navbar/>
            <br/>
            <MainPage />
        </div>
    );
}
