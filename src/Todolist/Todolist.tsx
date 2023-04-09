import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    title: string
    tasks: PropsTasksType[]
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
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
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => {
                           setTitle(e.currentTarget.value)
                       }}
                       onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                           if (e.key === "Enter") {
                               addTask()
                           }
                       }}
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
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

