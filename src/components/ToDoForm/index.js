import React, { useState, useEffect } from 'react';

export default function ToDoForm(props){

    const { initialForm = [] } = props;

    let [todos, setTodos] = useState(initialForm);
    
    let [title, setTitle] = useState('');

    let [assignedTo, assignment] = useState('');

    let [difficulty, difficultyRating] = useState(0);


    const saveTodo = e => {
        e.preventDefault();

        let newToDos = [...todos, { title, assignedTo, difficulty  }];
        setTodos(newToDos);
        e.target.reset();
    }


    return (
        <div>
            <form onSubmit={saveTodo}>
                <h3>Title</h3>
                <input className="title">

                </input>

                <h3>Assigned To</h3>
                <input className="assignedTo"></input>

                <h3>Difficulty</h3>
                <input className="difficulty"></input>
                <br></br>
                <br></br>
                <button type="submit">Save Todo Item</button>
            </form>
        </div>
    )
}