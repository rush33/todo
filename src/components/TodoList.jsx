import Todo from './Todo';

function TodoList({ todos }) {
  return (
    // mapping each todo item from App and calling Todo component to print it
    todos.map(todo => {
      return <Todo key={todo.id} todo={todo.name} />
    })

  )
}

export default TodoList;
