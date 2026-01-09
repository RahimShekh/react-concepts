import React, { useState } from "react";
import { nanoid } from 'nanoid'
import {toast} from "react-toastify";

function Create(props) {
    
  const{todos,setTodos} = props;  

  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newtodo = {
      id: nanoid(),
      title,
      isCompleted: false,
    };
    console.log(newtodo);

    const copyTodos = [...todos];
    copyTodos.push(newtodo);
    setTodos(copyTodos); // adding new todo with old todos

    //setTodos([...todos,newtodo])  //easy way to write
    toast.success("todo created");
    
    setTitle(""); // input bar ko khali karega
  };
  // console.log(todos)
  return (
    <div>
      <h1 className="font-bold text-5xl">Create Tasks</h1>
      <form action="">
        <input className="mt-10 py-3 px-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
        />
        <br />
        <br />
        <button className="px-3 py-2 bg-blue-600 rounded-md text-white mt-4"
        onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
}

export default Create;
