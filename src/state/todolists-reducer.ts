import {FilterValuesType, TodolistsType} from "../App";
import {v1} from "uuid";

export const TodoListsReducer = (state: TodolistsType[], action: TsarTypeAction): TodolistsType[] => {
    switch (action.type) {
        case"REMOVE-TODOLIST": {
            return state.filter(el => el.id !== action.payload.todolistId)
        }
        case "ADD-TODOLIST": {
            let newTodolistId = v1()
            let newTodolist: TodolistsType = {id: newTodolistId, title: action.payload.newTitle, filter: "all"}
            return [...state, newTodolist]
        }
        case "CHANGE-TODOLIST-TITLE": {
            return state.map(e => e.id === action.payload.todolistId ? {...e, title: action.payload.newTitle} : e)
        }
        case "CHANGE-TODOLIST-FILTER": {
            return state.map(e => e.id === action.payload.todolistId ? {...e, filter: action.payload.newFilter} : e)
        }
        default:
            return state
    }
}

type TsarTypeAction = removeTodolistACType | addTodolistACType | changeTodolistTitleACType | changeTodolistFilterACType

type removeTodolistACType = ReturnType<typeof removeTodolistAC>

export const removeTodolistAC = (todolistId: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todolistId
        }
    } as const
}
type addTodolistACType = ReturnType<typeof addTodolistAC>

export const addTodolistAC = (newTitle: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            newTitle
        }
    } as const
}

type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
export const changeTodolistTitleAC = (todolistId: string, newTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            newTitle,
            todolistId
        }
    } as const
}

type changeTodolistFilterACType = ReturnType<typeof changeTodolistFilterAC>
export const changeTodolistFilterAC = (todolistId: string, newFilter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            todolistId,
            newFilter
        }

    } as const
}