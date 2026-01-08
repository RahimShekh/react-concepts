import React from 'react'

// react dont even know that we changed value of name 
// so we need to tell react to re render in this case use useState
function State() {
  let name = "rahim";
  
  function changeName()
  {
    // name = "kaka";
  }

  console.log(name);
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={changeName}>Change</button>
    </div>
  )
}

export default State