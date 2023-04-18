import React, {ChangeEvent, useState} from 'react';
import {FilterValueType} from "../App";

type PropsType = {
    title: string
    tasks: PropsTasksType[]
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
    changeFilter: (value: FilterValueType) => void
    changeTaskStatus: (id: string, isDone: boolean) => void
    filter: FilterValueType
}
type PropsTasksType = {
    id: string;
    title: string;
    isDone: boolean
}
export const Todolist = (props: PropsType) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)
    const addTask = () => {
        if (title.trim() != "") {
            props.addTask(title.trim())
            setTitle("")
        } else {
            setError("Title is required!")
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === "Enter") {
            addTask()
        }
    }
    const onAllClickHandler = () => {
        props.changeFilter("all")
    }
    const onActiveClickHandler = () => {
        props.changeFilter("active")
    }
    const onCompletedClickHandler = () => {
        props.changeFilter("completed")
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyDown={onKeyDownHandler}
                       className={error ? "error" : ""}
                />
                <button onClick={addTask}>+</button>
                {error && <div className="error-message">{error}</div>}
            </div>
            <ul>
                {props.tasks.map((el) => {
                    const onClickHandler = () => {
                        props.removeTask(el.id)
                    }
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked
                        props.changeTaskStatus(el.id, newIsDoneValue)
                    }
                    return (
                        <li key={el.id}>
                            <button onClick={onClickHandler}>X
                            </button>
                            <input type="checkbox" checked={el.isDone} onChange={onChangeHandler}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button className={props.filter === "all" ? "active-filter": ""} onClick={onAllClickHandler}>All</button>
                <button className={props.filter === "active" ? "active-filter": ""} onClick={onActiveClickHandler}>Active</button>
                <button className={props.filter === "completed" ? "active-filter": ""} onClick={onCompletedClickHandler}>Completed
                </button>
            </div>
        </div>
    );
};

