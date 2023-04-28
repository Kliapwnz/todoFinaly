import {TodolistsType} from "../App";

export const TodoListsReducer = (state: TodolistsType[], action: any): TodolistsType[] => {
    switch (action.type) {
        case"XXX": {
            return state
        }
        default:
            return state
    }
}

type TsarTypeAction={}