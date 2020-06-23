import React, { useState } from 'react';
import Header from './components/Header'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'

function App() {

  let [todos, setTodos] = useState([{title: 'test', assignedTo: 'Stacey', difficulty: 1}]);
  console.log(todos);

  function addTodo(newTodo){
        console.log(newTodo)
        let newToDos = [...todos, newTodo];
        setTodos(newToDos);

  }

  function toggleTodo(indexToUpdate) {
    console.log(indexToUpdate);
    let updatedTodos = todos.map((todo, t) => {
      if(t !== indexToUpdate){
        return todo;
      }
      return {...todo, completed: !todo.completed};
    });
    setTodos(updatedTodos);
  }

  return (
    <>
    <Header />
    <ToDoForm onSave = {addTodo}/>
    <ToDoList list = {todos} onToggle = {toggleTodo}/>
    </>
  );
}

export default App;
