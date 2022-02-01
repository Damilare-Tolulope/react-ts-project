import React from 'react';
import Todo from './Todo'

// Create interface for the incoming props
interface TodoPropsHandler {
  todos: { id: number, todo: string, completed: boolean }[],
  toggleComplete: (id: number) => void;
  handleDelete: (id: number) => void;
}

// Add the interface to the module
const Todos: React.FC<TodoPropsHandler> = ({ todos, handleDelete, toggleComplete }) => {
  return (
    <div className="todos">{todos.map(t => <Todo key={t.id} todos={t} handleDelete={handleDelete} toggleComplete={toggleComplete} />)}</div>
  );
};

export default Todos;
