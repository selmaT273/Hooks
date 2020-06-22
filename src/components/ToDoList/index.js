import React, { useState, useEffect } from 'react';
import ToDoForm from '../ToDoForm';

export default function ToDoList(props){

    return(
        <ul>
            {props.list.map((todo, index) =>(
                <li key={index}>
                    {todo.title}
                    {todo.assignedTo}
                    {todo.difficulty}
                    
                </li>
            ))}
        </ul>
    )
}