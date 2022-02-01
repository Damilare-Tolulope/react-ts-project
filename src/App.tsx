import React, { useState } from 'react';
import './components/assets/css/TodoList.css';
import Todos from './components/Todo List/Todos';
import AddTodo from './components/Todo List/AddTodo';

const App: React.FC = () => {

  const [todos, setTodos] = useState<{ id: number, todo: string, completed: boolean }[]>([])
  const handleAddTodo = (todo: string) => {
    const newTodo = {
      id: todos.length + 1,
      todo,
      completed: false
    }

    setTodos([...todos, newTodo])
  }

  const handleDelete = (id: number) => {
    const filteredTodo = todos.filter(todo => {
      return todo.id !== id
    })

    setTodos(filteredTodo)
  }

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
  }

  const clearTodo = () => {
    setTodos([])
  }

  return (
    <div className="todo-app">
      <p style={titleStyle}>Todo list</p>
      <AddTodo addNewTodo={handleAddTodo} />
      <div className='mini-header'>
        <div className="number">You have {todos.length} todos</div>
        <button className="btnClear" onClick={clearTodo}>Clear all</button>
      </div>
      {todos.length ? <Todos todos={todos} handleDelete={handleDelete} toggleComplete={toggleComplete} /> : <div className='no-todo'>No todo planned!</div>}
    </div>
  );
}

const titleStyle = {
  fontSize: "20px",
  fontWeight: "bold",
}

export default App;
