import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {IconButton, TextField} from "@mui/material";

type PropsType = {
    callBack: (title: string) => void
}

export const AddItemForm = (props: PropsType) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }
    const addTask = () => {
        if (title.trim() !== "") {
            props.callBack(title.trim());
            setTitle("");
        } else {
            setError("Title is required");
        }
    }
    return (
        <div>
            {/*<input value={title}*/}
            {/*       onChange={onChangeHandler}*/}
            {/*       onKeyPress={onKeyPressHandler}*/}
            {/*       className={error ? "error" : ""}*/}
            {/*/>*/}
            <TextField id="outlined-basic"
                       label="Outlined"
                       variant="outlined"
                       size={"small"}
                       value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       className={error ? "error" : ""}/>
            <IconButton onClick={addTask}>
                <AddCircleOutlineIcon/>
            </IconButton>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

