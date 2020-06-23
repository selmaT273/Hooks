import React, { useState, useEffect } from 'react';

export default function ToDoForm(props){

    const { onSave } = props;

    
    let [title, setTitle] = useState('');

    let [assignedTo, setAssignedTo] = useState('');

    let [difficulty, setDifficulty] = useState(0);

    const updateTitle = e => setTitle(e.target.value);

    const updateAssignedTo = e => setAssignedTo(e.target.value);

    const updateDifficulty = e => setDifficulty(e.target.value);
    

    const saveTodo = e => {
        e.preventDefault();
        onSave({title, assignedTo, difficulty, completed: false});
        e.target.reset();
    }


    return (
        <div>
            <form onSubmit={saveTodo}>
                <label>Title</label>
                <input onChange={updateTitle}>

                </input>

                <label>Assigned To</label>
                <input onChange={updateAssignedTo}></input>

                <label>Difficulty</label>
                <input name="difficulty" type="range" min="0" max="5" step="1" onChange={updateDifficulty}></input>
                <br></br>
                <br></br>
                <button type="submit">Save Todo Item</button>
            </form>
        </div>
    );
}