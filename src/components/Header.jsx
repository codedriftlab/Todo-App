import { useState } from "react";

function Header({ addTodo }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input) return;
    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Header;
