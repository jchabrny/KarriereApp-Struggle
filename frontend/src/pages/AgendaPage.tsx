import React from "react";
import TaskHandler from "../components/TaskHandler";
import Navbar from "../components/Navbar";


export default function AgendaPage() {
    return (
        <div>
            <Navbar/>
            <br />
            <h3>
                Things to be done ... (task, deadline):
            </h3>
            <br/>
            <TaskHandler/>
        </div>
    )
}