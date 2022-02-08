import React, {ChangeEvent, useState} from "react";
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
        const newTask = { taskName: task, deadline: deadline };
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
                    return <TodoTask key={key} task={task} completeTask={completeTask} />;
                })}
            </div>
        </div>
    );
}