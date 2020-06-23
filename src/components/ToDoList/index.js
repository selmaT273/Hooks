import React, { useState, useEffect } from 'react';
import ToDoForm from '../ToDoForm';

export default function ToDoList(props){

    return(
        // <h3>Incomplete count: {props.list.filter(t => !t.completed).length}</h3>
        <ul>
            {props.list.map((todo, index) =>(
                <li key={index} onClick ={() => props.onToggle(index)}>
                    {todo.title}
                    {todo.assignedTo}
                    {todo.difficulty}
                    {todo.completed ? 'completed' : 'incomplete'}
                </li>
            ))}
        </ul>
    )
}