import React from 'react'

function App() {

  function handleClick()
  {
      alert("hello world")
  }

  function handleParam(msg)
  {
    alert(msg);
  }

  //create wrapper for parameter

  function wrapperHandler()
  {
    handleParam("yo yo params")
  }
  return (
    <>
    <div>App</div>
    <div>hello</div>
    <button onClick={handleClick}>Click</button>
    <button onClick={wrapperHandler}>Click me param</button>
    </>
  )
}
// dont call handleClick() it will run immediate
// we cant directly pass parameters handleClick("hello") like this it will run immediate
// so need to create a wrapper
export default App