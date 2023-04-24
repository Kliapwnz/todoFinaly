import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@mui/material";

type PropsType = {
    oldTitle: string
    callBack: (title: string) => void
}

export const EditableSpan = (props: PropsType) => {
    const [edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(props.oldTitle)
    const editHandler = () => {
        setEdit(!edit)
        addTask()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const addTask = () => {
        props.callBack(newTitle)
    }
    return (
        edit ? <TextField
                variant="standard"
                size="small"
                value={newTitle}
                onBlur={editHandler}
                autoFocus onChange={onChangeHandler}
            /> :
            <span onDoubleClick={editHandler}>{props.oldTitle}</span>
    );
};

