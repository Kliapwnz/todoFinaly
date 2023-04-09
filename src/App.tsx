import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist/Todolist";
import {v1} from "uuid";

function App() {
    let [tasks, setTasks] = useState( [
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "Football", isDone: true },
        { id: v1(), title: "Hockey", isDone: false }
    ])
    function removeTask(taskId:string) {
        let  filteredTasks = tasks.filter(task => task.id != taskId)
        setTasks(filteredTasks)
    }

    return (
        <div className="App">
            <Todolist title="What is your name"
                      tasks={tasks}
                      removeTask={removeTask}
            />
        </div>
    );
}

export default App;
