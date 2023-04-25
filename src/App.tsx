import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {AddItemForm} from "./AddItemForm";
import {ButtonAppBar} from "./ButtonAppBar";
import {Container, Grid} from "@mui/material";

export type FilterValuesType = "all" | "active" | "completed";
type TodolistsType = {
    id: string;
    title: string;
    filter: FilterValuesType
}
type TasksType = {
    [key: string]: TaskType[]
}

function App() {
    let todolistID1 = v1()
    let todolistID2 = v1()

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TasksType>({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},

        ],
        [todolistID2]: [
            {id: v1(), title: 'Rest API', isDone: true},
            {id: v1(), title: 'GraphQL', isDone: false},
        ]
    })

    const removeTodo = (todolistID: string) => {
        setTodolists(todolists.filter(el => el.id !== todolistID))
        delete tasks[todolistID]
    }
    const updateTask = (todolistID: string, taskId: string, newTitle: string) => {
        setTasks({
            ...tasks,
            [todolistID]: tasks[todolistID].map(el => el.id === taskId ? {...el, title: newTitle} : el)
        })
    }
    const updateTodolistTile = (todolistID: string, newTitle: string) => {
        setTodolists(todolists.map(el => el.id === todolistID ? {...el, title: newTitle} : el))
    }

    function removeTask(todolistID: string, taskId: string) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(el => el.id !== taskId)})
    }

    function addTask(todolistID: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})
    }

    function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].map(el => el.id === taskId ? {...el, isDone: isDone} : el)})
    }

    function changeFilter(todolistID: string, value: FilterValuesType) {
        setTodolists(todolists.map(el => el.id === todolistID ? {...el, filter: value} : el))
    }

    const addTodolist = (newTitle: string) => {
        const newID = v1()
        const newTodo: TodolistsType = {id: newID, title: newTitle, filter: 'all'}
        setTodolists([...todolists, newTodo])
        setTasks({...tasks, [newID]: []})
    }
    return (
        <div className="App">
            <ButtonAppBar/>
            <Container fixed>
                <Grid container>
                    <AddItemForm callBack={addTodolist}/>
                </Grid>
                {todolists.map(el => {
                    let tasksForTodolist = tasks[el.id];
                    if (el.filter === "active") {
                        tasksForTodolist = tasks[el.id].filter(t => t.isDone === false);
                    }
                    if (el.filter === "completed") {
                        tasksForTodolist = tasks[el.id].filter(t => t.isDone === true);
                    }
                    return (
                        <Todolist
                            key={el.id}
                            todolistID={el.id}
                            title={el.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={el.filter}
                            removeTodo={removeTodo}
                            updateTask={updateTask}
                            updateTodolistTile={updateTodolistTile}
                        />
                    )
                })}
            </Container>
        </div>
    );
}

export default App;
