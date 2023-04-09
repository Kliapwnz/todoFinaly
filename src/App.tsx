import React from 'react';
import './App.css';
import {Todolist} from "./Todolist/Todolist";

function App() {
    return (
        <div className="App">
            <Todolist title={"What is your name"}/>
            <Todolist title={"What is my name"}/>
        </div>
    );
}

export default App;
