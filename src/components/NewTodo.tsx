import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = ({
  onAddTodo,
}) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }

    onAddTodo(enteredText);
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
