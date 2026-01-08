import React from "react";

function Read(props) {
    const{todos,setTodos} = props;

  const deleteHandler = (id)=>{
    // console.log("delete pressed");
    const filterTodo = todos.filter((todo) => todo.id != id)  // not equal tab tak chalega equal equal hua toh remove
    setTodos(filterTodo)
  }  

  const renderTodos = todos.map((todo) => {
    return <li className="mt-7" key={todo.id}>{todo.title} 
    <span className="m-7 bg-red-400 px-3 py-2 rounded-md text-amber-50"
    onClick={()=> deleteHandler(todo.id)}>Delete</span></li>;
  });
  return (
    <div className="ml-20 border-3 border-black rounded-md p-5">
      <h1 className="text-4xl opacity-15">Pending todos</h1>
      <ol className="text-2xl mt-10">{renderTodos}</ol>
    </div>
  );
}

export default Read;
