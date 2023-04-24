import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, Checkbox, IconButton, ListItem, TextField, Typography} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {CheckBox} from "@mui/icons-material";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistID: string, taskId: string) => void
    changeFilter: (todolistID: string, value: FilterValuesType) => void
    addTask: (todolistID: string, title: string) => void
    changeTaskStatus: (todolistID: string, taskId: string, isDone: boolean) => void
    filter: FilterValuesType
    todolistID: string
    removeTodo: (todolistID: string) => void
    updateTask: (todolistID: string, taskID: string, newTitle: string) => void
    updateTodolistTile: (todolistID: string, newTitle: string) => void
}

export function Todolist(props: PropsType) {


    const onAllClickHandler = () => props.changeFilter(props.todolistID, "all");
    const onActiveClickHandler = () => props.changeFilter(props.todolistID, "active");
    const onCompletedClickHandler = () => props.changeFilter(props.todolistID, "completed");
    const removeTodoHandler = () => {
        props.removeTodo(props.todolistID)
    }
    const addTaskHandler = (title: string) => {
        props.addTask(props.todolistID, title)
    }
    const updateTodoHandler = (newTitle: string) => {
        props.updateTodolistTile(props.todolistID, newTitle)
    }

    return <div>
        <Typography
            variant={"h5"}
            align={"center"}
            fontWeight={"bold"}
            gutterBottom
        >
            <EditableSpan oldTitle={props.title} callBack={updateTodoHandler}/>
            <IconButton
                size="small"
                onClick={removeTodoHandler}>
                <DeleteOutlineIcon/>
            </IconButton>
        </Typography>
        <AddItemForm callBack={addTaskHandler}/>

        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(props.todolistID, t.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(props.todolistID, t.id, e.currentTarget.checked);
                    }
                    const updateTaskHandler = (newTitle: string) => {
                        props.updateTask(props.todolistID, t.id, newTitle)
                    }

                    return <ListItem key={t.id}
                                     className={t.isDone ? "is-done" : ""}
                                     disablePadding
                                     secondaryAction={<IconButton
                                         size="small"
                                         onClick={onClickHandler}>
                                         <DeleteOutlineIcon/>
                                     </IconButton>}
                    >

                        <Checkbox
                            size={"small"}
                            onChange={onChangeHandler}
                            checked={t.isDone}
                        />
                        <EditableSpan oldTitle={t.title} callBack={updateTaskHandler}/>
                    </ListItem>
                })
            }
        </ul>
        <div className={"btn-filter-container"}>
            <Button variant="contained"
                    size="small"
                    disableElevation
                    color={props.filter === 'all' ? "secondary" : "primary"}
                    onClick={onAllClickHandler}>All
            </Button>
            <Button variant="contained"
                    size="small"
                    disableElevation
                    color={props.filter === 'active' ? "secondary" : "primary"}
                    onClick={onActiveClickHandler}>Active
            </Button>
            <Button variant="contained"
                    size="small"
                    disableElevation
                    color={props.filter === 'completed' ? "secondary" : "primary"}
                    onClick={onCompletedClickHandler}>Completed
            </Button>
        </div>
    </div>
}
