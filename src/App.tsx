import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist/Todolist";
import {v1} from "uuid";

export type FilterValueType = "all" | "active" | "completed"

function App() {
    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Football", isDone: true},
        {id: v1(), title: "Hockey", isDone: false}
    ])
    let [filter, setFilter] = useState<FilterValueType>("all")
    let tasksForTodolist = tasks
    if (filter === "active") {
        tasksForTodolist = tasks.filter(task => task.isDone === false)
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(task => task.isDone === true)
    }

    function removeTask(taskId: string) {
        let filteredTasks = tasks.filter(task => task.id != taskId)
        setTasks(filteredTasks)
    }

    function addTask(title: string) {
        let task = {id: v1(), title: title, isDone: false}
        let newTask = [task, ...tasks]
        setTasks(newTask)
    }

    function changeFilter(value: FilterValueType) {
        setFilter(value)
    }
    function changeTaskStatus(id:string, isDone:boolean) {
        let task = tasks.find(t=>t.id === id)
        if(task) {
            task.isDone = isDone;
            setTasks([...tasks])
        }
    }

    return (
        <div className="App">
            <Todolist title="What is your name"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      addTask={addTask}
                      changeFilter={changeFilter}
                      changeTaskStatus={changeTaskStatus}
            />
        </div>
    );
}

export default App;
