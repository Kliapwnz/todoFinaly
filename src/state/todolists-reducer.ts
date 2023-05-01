import {TodolistsType} from "../App";
import {v1} from "uuid";

export const TodoListsReducer = (state: TodolistsType[], action: TsarTypeAction): TodolistsType[] => {
    switch (action.type) {
        case"REMOVE-TODOLIST": {
            return state.filter(el => el.id !== action.payload.todolistId)
        }
        case "ADD-TODOLIST": {
            let newTodolistId= v1()
            let newTodolist: TodolistsType={id:newTodolistId, title: action.payload.newTitle, filter: "all"}
            return [...state, newTodolist]
        }
        default:
            return state
    }
}

type TsarTypeAction = removeTodolistACType | addTodolistACType

type removeTodolistACType = ReturnType<typeof removeTodolistAC>

export const removeTodolistAC = (todolistId: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todolistId
        }
    } as const
}
type addTodolistACType =ReturnType<typeof addTodolistAC>

export const addTodolistAC = (newTitle: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            newTitle
        }
    } as const
}