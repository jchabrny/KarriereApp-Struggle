import React, {ChangeEvent, useState} from "react";
import './TaskHandler.scss';
import {ITodo} from "../models/Todo";
import TodoTask from "./TodoTask";
import Memo from "./Memo";
import {IMemo} from "../models/Memo";


export default function TaskHandler() {

    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<string>("");
    const [memo, setMemo] = useState<string>("");
    const [memoDeadline, setMemoDeadline] = useState<string>("");
    const [todoList, setTodoList] = useState<ITodo[]>([]);
    const [memoList, setMemoList] = useState<IMemo[]>([]);


    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value)
        } else {
            setDeadline(event.target.value);
        }
    };

    const handleMemoChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "memo") {
            setMemo(event.target.value)
        } else {
            setMemoDeadline(event.target.value);
        }
    };

    const addMemo = (): void => {
        const newMemo = {memoName: memo, memoDeadline: memoDeadline};
        setMemoList([...memoList, newMemo]);
        setMemo("");
        setMemoDeadline("");
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
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h3>
                        Things to be done ...
                    </h3>
                    <div className="input-field">
                        <button className="btn-create" onClick={addTask}>+</button>
                        <input type="text" placeholder="new task" name="task" value={task}
                               onChange={handleChange}/>
                        <input type="month" name="deadline" value={deadline} onChange={handleChange}/>
                    </div>
                    <div className="all-tasks">
                        <h3 className="task-list-title">My tasks:</h3>
                        <p className="task-count">4 tasks remaining</p>
                        <ul className="task-list">
                            {todoList.map((task: ITodo, key) => {
                                return <TodoTask key={key} task={task} completeTask={completeTask}/>;
                            })}
                        </ul>
                    </div>
                </div>
                <div className="col-6">
                    <div className="memo-list">
                        <h3 className="memo-title">Application Company A</h3>
                        <div className="new memo-creator">
                            <button className="btn-create" onClick={addMemo}>+</button>
                            <input type="text" placeholder="new memo" name="memo" value={memo}
                                   onChange={handleMemoChange}/>
                            <input type="month" name="memo-deadline" value={memoDeadline} onChange={handleMemoChange}/>
                        </div>
                            <div className="memo-body">
                                <ul className="memo-list">
                                    {memoList.map((memo: IMemo, key) => {
                                        return <Memo key={key} memo={memo} />;
                                    })}
                                </ul>
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
                                               id="memo-2"/>
                                        <label htmlFor="memo-2">
                                            <span className="custom-checkbox"></span>
                                            Call the HR
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="delete-content">
                                <button className="btn btn-dark btn-md btn-delete">
                                    Clear completed memos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
    );
}