import React, { useState,useRef, useEffect } from 'react'
import '../InputFeild/style.css'
import { todo } from '../Model';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'



type props={
    todo:todo;
    todos:todo[] ;
    settodos:React.Dispatch<React.SetStateAction<todo[]>>;

}

const SingleTodo = ({todo,todos,settodos}:props) => {

 
  const[edit,setEdit]= useState<boolean>(false)
 const[edittodo,setEditTodo]=useState<string>(todo.todo)

 const handleDone=(id:number)=>{
  settodos(todos.map((todo)=>todo.id===id?{...todo,isDone:!todo.isDone}:todo))
 };
 const handleDelete=(id:number)=>{
  settodos(todos.filter((todo)=>todo.id !== id))
 }

const handleEdit=(e:React.FormEvent,id:number)=>{
  e.preventDefault();

settodos(todos.map((todo)=>(todo.id===id?{...todo,todo:edittodo}:todo)))
setEdit(false);
}
const InputRef=useRef<HTMLInputElement>(null);

useEffect(()=>{InputRef.current?.focus()},[edit])



  return (
    <form className='todos_single' onSubmit={(e)=>handleEdit(e,todo.id)}>
      {
      
        edit?(<input
          ref={InputRef}
          value={edittodo} onChange={(e)=>setEditTodo(e.target.value)} className='todo_single--text'/>
        ):(  
          todo.isDone?(
      
            <s className="todos_single--text">{todo.todo}</s> 
            ):(
              <span className="todos_single--text">{todo.todo}</span> 
              )
              )}


    
      <div>
        <span className="icon" onClick={
          ()=>{ if(!edit && !todo.isDone){setEdit(!edit)}}
        }><AiFillEdit /></span>
        <span className="icon"  onClick={()=>handleDelete(todo.id)}><AiFillDelete/></span>
        <span className="icon"  onClick={()=>handleDone(todo.id)}><MdDone/></span>
      </div>
    
    
    </form>
  )
}

export default SingleTodo
