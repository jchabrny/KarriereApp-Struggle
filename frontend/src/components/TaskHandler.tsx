import React, {ChangeEvent, useState} from "react";
import './TaskHandler.scss';
import {ITodo} from "../models/Todo";
import TodoTask from "./TodoTask";


export default function TaskHandler() {

    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<string>("");
    const [todoList, setTodoList] = useState<ITodo[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value)
        } else {
            setDeadline(event.target.value);
        }
    };

    const addTask = (): void => {
        const newTask = {taskName: task, deadline: deadline};
        setTodoList([...todoList, newTask]);
        setTask("");
        setDeadline("");
    };

    const completeTask = (taskNameToDelete: string): void => {
        setTodoList(
            todoList.filter((task) => {
                return task.taskName !== taskNameToDelete
            })
        );
    };

    return (
        <div>
            <div className="header">
                <input type="text" placeholder="Task..." name="task" value={task} onChange={handleChange}/>
                <input type="month" name="deadline" value={deadline} onChange={handleChange}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="todoList">
                {todoList.map((task: ITodo, key) => {
                    return <TodoTask key={key} task={task} completeTask={completeTask}/>;
                })}
            </div>
            <div>
                <div className="all-tasks">
                    <h3 className="task-list-title">My tasks:</h3>
                    <p className="task-count">4 tasks remaining</p>
                    <ul className="task-list">
                        <li className="active-task">Application Company A</li>
                        <li className="task-name">Redo CV</li>
                        <li className="task-name">Find new job offers</li>
                        <li className="task-name">Research average salaries</li>
                    </ul>
                    <form action="">
                        <input type="text"
                               className="new task"
                               placeholder="new task"
                               aria-label="new task"
                        />
                        <button className="btn-create" aria-label="create new task">+</button>
                    </form>
                </div>
                <br />
                <div className="memo-list">
                    <div className="memo-header">
                        <h3 className="memo-title">Application Company A</h3>
                    </div>
                    <div className="memo-body">
                        <div className="memos">
                            <div className="memo">
                                <input
                                    type="checkbox"
                                id="memo-1"
                                />
                                <label htmlFor="memo-1">
                                    <span className="custom-checkbox"></span>
                                    Research about the company
                                </label>
                            </div>
                            <div className="memo">
                                <input type="checkbox"
                                       id="memo-2" />
                                <label htmlFor="memo-2">
                                    <span className="custom-checkbox"></span>
                                    Call the HR
                                </label>
                            </div>
                        </div>
                        <div className="new memo-creator">
                            <form action="">
                                <input type="text"
                                       className="new memo"
                                       placeholder="enter new memo"
                                       aria-label="new memo"
                                />
                                <button className="btn-create" aria-label="create new memo">+</button>
                            </form>
                        </div>
                        <div className="delete-content">
                            <button className="btn btn-dark btn-md btn-delete">
                                Clear completed memos
                            </button>
                            <button className="btn btn-dark btn-md btn-delete">
                                Delete task
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}