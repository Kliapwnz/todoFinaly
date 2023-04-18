import React, {ChangeEvent, useState} from 'react';
import {FilterValueType} from "../App";

type PropsType = {
    title: string
    tasks: PropsTasksType[]
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
    changeFilter:(value:FilterValueType)=>void
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
                {props.tasks.map((e) => {
                    return (
                        <li key={e.id}>
                            <button onClick={() => {
                                props.removeTask(e.id)
                            }}>X
                            </button>
                            <input type="checkbox" checked={e.isDone}/>
                            <span>{e.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={()=>{props.changeFilter("all")}}>All</button>
                <button onClick={()=>{props.changeFilter("active")}}>Active</button>
                <button onClick={()=>{props.changeFilter("completed")}}>Completed</button>
            </div>
        </div>
    );
};

