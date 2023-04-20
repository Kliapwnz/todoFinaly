import React, {useState} from 'react';

export const AddItemForm = () => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)
    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

