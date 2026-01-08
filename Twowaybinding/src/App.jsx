import React, { useState } from 'react'
// two way binding is just for form elements
function App() {
  const [users,setUsers] = useState([
    {name:"john",age:21},
    {name:"rahim",age:24},
    {name:"kak",age:45},
  ])

  const renderUsers = users.map((elem,index)=>{
    return <li key={index}>{elem.name}</li>
  })
  // const changeHandler = (e)=>{
  //   // console.log(e.target.value);
  //   setFullname(e.target.value);
  // }

  const [fullname,setFullname] = useState("");
  const [age,setAge] = useState("");

  const submitHandler = (e)=>{
    e.preventDefault();
    const newUser = {fullname,age};
  
    console.log(newUser);  // yahi data form se backend bhejenge isliye two way bind use hota hai
    console.log("form submit");
  }
  // console.log(fullname);
  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={submitHandler}>

      <input onChange={(e)=> setFullname(e.target.value)}
      value={fullname}  // show data
      type="text" 
      placeholder='fullname' />

      <input onChange={(e)=> setAge(e.target.value)}
       value={age}
       type="text" placeholder='age' />

      <button>submit</button>
      </form>
      <hr />
      <h1>User Data</h1>
      <ol>{renderUsers}</ol>
    </div>
  )
}

export default App

//jo input mein likha hoga voh react ko batana hoga phir react save karega
