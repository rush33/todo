import TodoList from "./components/TodoList";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Todo 1",
      isCompleted: false,
    },
  ]);

  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  );
}
export default App;
