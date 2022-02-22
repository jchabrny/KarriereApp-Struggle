import React from "react";
import TaskHandler from "../components/TaskHandler";
import Navbar from "../components/Navbar";
import './AgendaPage.scss';


export default function AgendaPage() {
    return (
        <div>
            <Navbar/>
            <br />
            <div className="agenda-container">
            <TaskHandler/>
            </div>
        </div>
    )
}