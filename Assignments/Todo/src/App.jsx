import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: text,
        done: false,
      },
    ]);

    setText("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", textAlign: "center" }}>
      <h2>Todo App</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter task..."
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              padding: "8px",
              border: "1px solid #ddd",
            }}
          >
            <span
              onClick={() => handleToggle(item.id)}
              style={{
                cursor: "pointer",
                textDecoration: item.done ? "line-through" : "none",
              }}
            >
              {item.title}
            </span>

            <button onClick={() => handleDelete(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;