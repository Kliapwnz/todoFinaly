import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    oldTitle: string
}

export const EditableSpan = (props: PropsType) => {
    const [edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(props.oldTitle)
    const editHandler =()=> {
        setEdit(!edit)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    return (
        edit ? <input value={newTitle} onBlur={editHandler} autoFocus onChange={onChangeHandler}/> :
        <span onDoubleClick={editHandler}>{props.oldTitle}</span>
    );
};

