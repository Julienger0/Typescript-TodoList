import React, { useEffect, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Todo } from "../models/models";
const SingleTodo: React.FC<{
  //   index: number;
  todo: Todo;
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}> = ({ todo, todos, setTodos }) => {
  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>
    </form>
  );
};

export default SingleTodo;
