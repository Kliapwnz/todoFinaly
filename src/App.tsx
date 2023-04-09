import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist/Todolist";

function App() {
    let [tasks, setTasks] = useState( [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Football", isDone: true },
        { id: 5, title: "Hockey", isDone: false }
    ])
    function removeTask(taskId:number) {
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
