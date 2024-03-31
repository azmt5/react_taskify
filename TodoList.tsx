import React from "react";
import "../InputFeild/style.css";
import { todo } from "../Model";
import SingleTodo from "./SingleTodo";

interface props {
  todos: todo[];
  settodos: React.Dispatch<React.SetStateAction<todo[]>>;
}

const TodoList = ({ todos, settodos }: props) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          settodos={settodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
