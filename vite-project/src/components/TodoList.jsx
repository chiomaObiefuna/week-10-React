import React, { useState } from 'react';

const TodoList = () => {
  // State for the list of todos
  const [todos, setTodos] = useState([]);
  // State for the current input value
  const [input, setInput] = useState('');

  // Function to add a new todo
  const handleAdd = () => {
    if (input.trim() === '') return; 

    const newTodo = {
      id: Date.now(),
      text: input
    };

    setTodos([...todos, newTodo]);
    setInput('');
  };

  // Function to delete a todo by ID
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Allow pressing "Enter" to add
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div style={containerStyle}>
      <h2>My Todo List</h2>

      {/* Input Section */}
      <div style={inputContainerStyle}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new task..."
          style={inputStyle}
        />
        <button onClick={handleAdd} style={addButtonStyle}>
          Add
        </button>
      </div>

      {/* List Display */}
      <ul style={listStyle}>
        {todos.length === 0 ? (
          <p style={{ color: '#888' }}>No tasks yet. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} style={itemStyle}>
              <span>{todo.text}</span>
              <button
                onClick={() => handleDelete(todo.id)}
                style={deleteButtonStyle}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

// --- Styles ---
const containerStyle = {
  maxWidth: '400px',
  margin: '50px auto',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

const inputContainerStyle = {
  display: 'flex',
  gap: '10px',
  marginBottom: '20px'
};

const inputStyle = {
  flex: 1,
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc'
};

const addButtonStyle = {
  padding: '8px 16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

const listStyle = {
  listStyleType: 'none',
  padding: 0
};

const itemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#c20931',
  borderBottom: '1px solid #222020',
  padding: '10px',
  marginBottom: '5px'
};

const deleteButtonStyle = {
  backgroundColor: '#f10909',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  padding: '5px 10px',
  cursor: 'pointer',
  fontSize: '0.8rem'
};

export default TodoList;
