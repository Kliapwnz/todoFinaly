import React, {useState} from 'react';

type PropsType = {
    title: string
}

export const EditableSpan = (props: PropsType) => {
    const [edit, setEdit] = useState(false)
    const editHandler =()=> {
        setEdit(true)
    }
    return (
        edit ? <input value={props.title}/> :
        <span onDoubleClick={editHandler}>{props.title}</span>
    );
};

