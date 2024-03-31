import React, { useRef } from "react";
import "./style.css";
interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAd: (e: React.FormEvent) => void;
}

const InputFeild = ({ todo, setTodo, handleAd }: props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="enter your task"
        className="input_box"
      />
      <button type="submit" className="input_submit">
        go
      </button>
    </form>
  );
};

export default InputFeild;
