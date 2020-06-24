import React, { useState, useEffect } from 'react';
import ToDoForm from '../ToDoForm';
import useFetch from '../../hooks/fetch';

export default function ToDoList(props){

    const [isLoading, data] = useFetch('api');

    if (isLoading) {
        return (<h2>Loading...</h2>)
    }

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