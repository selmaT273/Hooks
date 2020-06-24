import React, { useState, useEffect } from 'react';
import useForm from '../../hooks/form.js';

export default function ToDoForm(props){

    const { onSave } = props;
    const requiredValues = {
        difficulty: 5,
        completed: false,
    }

    let [handleSubmit, handleChange] = useForm(saveFromHook);

    function saveFromHook(formValues){
        onSave({
            ...requiredValues,
            ...formValues,
        });

        // TODO: use fetch to POST
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input name="title" onChange={handleChange}>

                </input>

                <label>Assigned To</label>
                <input name="assignedTo" onChange={handleChange}></input>

                <label>Difficulty</label>
                <input name="difficulty" type="range" min="0" max="5" step="1" onChange={handleChange} />
                <br></br>
                <br></br>
                <button type="submit">Save Todo Item</button>
            </form>
        </div>
    );
}