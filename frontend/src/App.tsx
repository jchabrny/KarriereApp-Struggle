import React from 'react';
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import './App.scss';
import data from './mock-data.json';

type Data = typeof data

export default function App() {

    return (
        <div className="App">
            <Navbar/>
            <br/>
            <MainPage data={data}/>
        </div>
    );
}
