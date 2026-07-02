import { useState } from "react";

function TodoApp() {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    // Prevent adding empty todos
    if (input.trim() === "") return;

    setTodos([...todos, input]);
    setInput("");
  };

  // Delete a todo by its index
  const deleteTodo = (indexToDelete) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
