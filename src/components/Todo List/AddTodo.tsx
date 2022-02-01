import React, { useRef } from 'react';

interface AddTodoProps {
    addNewTodo: (todo: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addNewTodo }) => {

    const inputTextRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newTodo = inputTextRef.current!.value;
        if (!newTodo) return alert("Enter a new todo");

        addNewTodo(newTodo);
        inputTextRef.current!.value = '';
    }

    return (
        <form className='new-todo' onSubmit={handleSubmit}>
            <input className='inputText' type='text' ref={inputTextRef} placeholder='Enter todo...' />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodo;
