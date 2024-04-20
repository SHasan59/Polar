'use client';
import { useState } from 'react';
import '../css/styles.css';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue.trim(), important: false }]);
      setInputValue('');
    }
  };

  const toggleImportant = (index) => {
    const updatedTodos = [...todos];
    const toggledTodo = {
      ...updatedTodos[index],
      important: !updatedTodos[index].important,
    };
    updatedTodos.splice(index, 1);
    if (toggledTodo.important) {
      updatedTodos.unshift(toggledTodo);
    } else {
      updatedTodos.push(toggledTodo);
    }
    setTodos(updatedTodos);
  };

  const handleExportTodos = () => {
    const content = todos
      .map((todo) => `${todo.text}${todo.important ? ' (Important)' : ''}`)
      .join('\n');
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'todos.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleImportTodos = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result?.toString();
        if (content) {
          const newTodos = content.split('\n').map((todo) => ({
            text: todo.replace('(Important)', '').trim(),
            important: todo.includes('(Important)'),
          }));
          setTodos(newTodos);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleTaskCompletion = (index) => {
    const taskCompleted = todos[index].text;

    const confirmation = window.confirm(
      `Congratulations! You have completed the task: ${taskCompleted}`
    );
    if (confirmation) {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
    }
  };

  return (
    <main
      className="bg-gray-900"
      style={{
        backgroundImage: "url('/bear.jpg')",
        backgroundSize: 'side',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="flex flex-col items-center justify-center min-h-screen py-2"
        style={{ fontFamily: ' font-pixelify-sans' }}
      >
        <div className="bg-blue-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl mb-4 font-pixelify-sans">Task</h1>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-pixelify-sans"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter a new task"
            />
          </div>
          <div className="mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 font-pixelify-sans"
              onClick={handleAddTodo}
            >
              Add
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 font-pixelify-sans"
              onClick={handleExportTodos}
            >
              Export
            </button>
            <input
              type="file"
              accept=".txt"
              onChange={handleImportTodos}
              className="bg-darkblue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 font-pixelify-sans"
            />
          </div>
          <ul>
            {todos.map((todo, index) => (
              <li
                key={index}
                className="flex justify-between items-center mb-2 font-pixelify-sans"
              >
                <span
                  className={
                    todo.important
                      ? 'text-red-600 font-bold  rounded focus:outline-none focus:shadow-outline mr-2'
                      : 'text-black'
                  }
                >
                  {todo.text}
                </span>
                <div>
                  <button
                    className={`bg-red-400 hover:bg-red-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2 font-pixelify-sans ${
                      todo.important && 'bg-red-600'
                    }`}
                    onClick={() => toggleImportant(index)}
                  >
                    {todo.important ? 'Unmark' : 'Mark'} Important
                  </button>
                  <button
                    className="bg-green-400 hover:bg-green-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline font-pixelify-sans"
                    onClick={() => handleTaskCompletion(index)}
                  >
                    Complete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
