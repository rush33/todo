import { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  const handleSubmit = () => {
    setTodo(previous => [...previous, value]);
    console.log(todo);
  };

  return (
    <div>
      <input value={value} type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      {todo.map((item, index) => {
        return <TodoList key={index} item={item} />;
      })}
    </div>
  );
};

export default Todo;
