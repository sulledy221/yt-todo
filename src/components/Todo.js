import React, { useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import TodoForm from "./TodoForm";

export default function Todo({ todos, completeTodo, removeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiDeleteBin2Fill
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <RiEdit2Fill
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}
