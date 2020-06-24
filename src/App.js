import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import useFetch from './hooks/fetch';

const todosUrl = 'https://deltav-todo.azurewebsites.net/api/v1/Todos';
function App() {
  const [isLoading, data, refresh] = useFetch(todosUrl);


  let [todos, setTodos] = useState([{title: 'test', assignedTo: 'Stacey', difficulty: 1}]);
  // TODO: replace todos with data whenever it changes
  console.log(todos);
  useEffect(() => {
    setTodos(data);
  }, [data]);

  async function addTodo(newTodo){
        console.log(newTodo)
        let newToDos = [...todos, newTodo];
        setTodos(newToDos);

        let response = await fetch(todosUrl, {
          method: 'post',
          headers:{'content-type': 'application/json'},
          body: JSON.stringify(newTodo)
        });
        console.log(response);
        // update todos to inject our id?
        // nah, let's refetch instead
        refresh();
  }

  async function toggleTodo(indexToUpdate) {
    console.log(indexToUpdate);
    let updatedTodos = todos.map((todo, t) => {
      if(t !== indexToUpdate){
        return todo;
      }
      return {...todo, completed: !todo.completed};
    });
    setTodos(updatedTodos);

    const todoToUpdate = updatedTodos[indexToUpdate];
    console.log({todoToUpdate})
    await fetch(`${todosUrl}/${todoToUpdate.id}`, {
      method: 'put',
      headers:{'content-type': 'application/json'},
      body: JSON.stringify(todoToUpdate)
    });
    refresh();
  }

  return (
    <>
    <Header />
    <ToDoForm onSave = {addTodo}/>
    <ToDoList isLoading = {isLoading} list={todos} onToggle = {toggleTodo}/>

    </>
  );
}

export default App;
