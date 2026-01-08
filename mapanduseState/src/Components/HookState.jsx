import React from 'react'
import { useState } from 'react';

function HookState() {
    const[name,setname] = useState("rahim")
  
  function changeName()
  {
    // setname("kaka");  react batches and final value will be rendered
    setname("ka");
  }

  console.log(name);
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={changeName}>Change</button>
    </div>
  )
}

export default HookState