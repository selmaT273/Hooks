import React, { useState, useEffect } from 'react';
import ToDoForm from '../ToDoForm';

export default function ToDoList(props){

    return(
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