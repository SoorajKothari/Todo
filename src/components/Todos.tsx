import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
const Todos: React.FC<{items:Todo[],onRemove: (text: string|null) => void }> = (props) => {
  return (
    <ul>
      {props.items.map((item)=> (
        <TodoItem key={item.id} text={item.text} onRemove={props.onRemove}/>
      ))}
    </ul>
  );
}

export default Todos;
