import React from 'react';

// Create interface for the incoming props
interface TodoProp {
  todos: { id: number, todo: string, completed: boolean },
  toggleComplete: (id: number) => void,
  handleDelete: (id: number) => void,
}

// Add the interface to the module
const Todo: React.FC<TodoProp> = ({ todos, handleDelete, toggleComplete }) => {

  const getStyle = () => {
    return {
      textDecoration: (todos.completed) ? "line-through" : "none"
    }
  }

  return (
    <ul>
      <li style={getStyle()} className='todo'><input type="checkbox" onChange={() => toggleComplete(todos.id)} />{todos.todo} <span style={{ cursor: "pointer" }} onClick={() => handleDelete(todos.id)}>x</span></li>
    </ul>
  )
};

export default Todo;
