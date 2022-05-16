import React from "react";

const TodoItem: React.FC<{ text: string }> = ({ text }) => {
  return <div>{text}</div>;
};

export default TodoItem;
