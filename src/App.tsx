import React, { useState } from "react";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function onAddTodoHandler(text: string) {
    const newTodo = new Todo(text);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  }

  function onRemoveTodoHandler(todoId: string) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  }

  return (
    <div>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos items={todos} onRemoveTodo={onRemoveTodoHandler} />
    </div>
  );
}

export default App;
