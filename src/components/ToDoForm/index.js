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
        onSave({title, assignedTo, difficulty});
        e.target.reset();
    }


    return (
        <div>
            <form onSubmit={saveTodo}>
                <h3>Title</h3>
                <input onChange={updateTitle}>

                </input>

                <h3>Assigned To</h3>
                <input onChange={updateAssignedTo}></input>

                <h3>Difficulty</h3>
                <input onChange={updateDifficulty}></input>
                <br></br>
                <br></br>
                <button type="submit">Save Todo Item</button>
            </form>
        </div>
    );
}