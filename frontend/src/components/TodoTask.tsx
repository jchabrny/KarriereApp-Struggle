import React from "react";
import {ITodo} from "../models/Todo";
import './TodoTask.scss';
import {FaTrash} from "react-icons/fa";

interface Props {
    task: ITodo;
    completeTask(taskNameToDelete: string): void;
}

export default function TodoTask({task, completeTask }: Props) {

    return(
        <div className="task">
            <div className="container">
                <div className="row">
                    <div className="col-5">
              {task.taskName}
                    </div>
                        <div className="col-2">
                {task.deadline}
                    </div>
                    <div className="col-5">
                    <button className="delete-button" onClick={() => {completeTask(task.taskName);}}><FaTrash/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}