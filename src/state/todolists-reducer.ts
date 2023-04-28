import {TodolistsType} from "../App";

export const TodoListsReducer = (state: TodolistsType[], action: TsarTypeAction): TodolistsType[] => {
    switch (action.type) {
        case"XXX": {
            return state
        }
        default:
            return state
    }
}

type TsarTypeAction = removeTodolistACType

type removeTodolistACType=ReturnType<typeof removeTodolistAC>

export const removeTodolistAC=(todolistId:string)=>{
    return {
        type: 'REMOVE-TODOLIST',
        payload:{
            todolistId
        }

    }as const
}