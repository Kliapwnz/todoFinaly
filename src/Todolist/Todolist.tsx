import React from 'react';

type PropsType = {
    title: string
    tasks: PropsTasksType[]
    removeTask:(taskId:string)=> void
}
type PropsTasksType = {
    id: string;
    title: string;
    isDone: boolean
}
export const Todolist = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((e) => {
                    return (
                        <li key={e.id}>
                            <button onClick={()=>{props.removeTask(e.id)}}>X</button>
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

