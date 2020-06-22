import React, { useState } from 'react';
import Header from './components/Header'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'

function App() {

  let [todos, setTodos] = useState([{title: 'test', assignedTo: 'Stacey', difficulty: 1}]);

  function addTodo(newTodo){
        console.log(newTodo)
        let newToDos = [...todos, newTodo];
        setTodos(newToDos);

  }

  return (
    <>
    <Header />
    <ToDoForm onSave = {addTodo}/>
    <ToDoList list = {todos} />
    </>
  );
}

export default App;
