import React, {ChangeEvent, useState} from 'react';
import {FilterValueType} from "../App";

type PropsType = {
    title: string
    tasks: PropsTasksType[]
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
    changeFilter: (value: FilterValueType) => void
    changeTaskStatus: (id: string, isDone: boolean) => void
}
type PropsTasksType = {
    id: string;
    title: string;
    isDone: boolean
}
export const Todolist = (props: PropsType) => {
    let [title, setTitle] = useState("")
    const addTask = () => {
        props.addTask(title)
        setTitle("")
    }
    const onChange = () => (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyDown = () => (e: React.KeyboardEvent<HTMLInputElement>) => {
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
                       onChange={onChange}
                       onKeyDown={onKeyDown}
                />
                <button onClick={addTask}>+
                </button>
            </div>
            <ul>
                {props.tasks.map((el) => {
                    const onClickHandler = () => {props.removeTask(el.id)}
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
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed
                </button>
            </div>
        </div>
    );
};

