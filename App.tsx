import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild/InputFeild";
import { todo } from "./components/Model";
import TodoList from "./components/todoList/TodoList";

const App: React.FC = () => {
  const [todo, settodo] = useState<string>("");
   const [todos,settodos]= useState<todo[]>([])
   const handleAd=(e:React.FormEvent)=>{e.preventDefault()
  if(todo){
    settodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
    settodo("")
  }
  
  }
  console.log(todos); 

  return (
    <div className="app">
      <span className="heading">taskify</span>
      <InputFeild todo={todo} setTodo={settodo} handleAd={handleAd}/>
      {/* {todos.map((t)=>(<li>{t.todo}</li>))} */}
      <TodoList todos={todos} settodos={settodos}/>
   
    </div>

  
  );
};

export default App;
