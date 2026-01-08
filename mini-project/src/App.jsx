import React, { useState } from 'react'
import Two from './components/Two'
import Create from './components/Create';
import Read from './components/Read';


function App () {
   const [todos, setTodos] = useState([
   { id: 1, title: "work need to do", isCompleted: false },
    ]);
   
  return (
    <div className='flex items-center justify-center h-screen'>
      <Create todos={todos} setTodos = {setTodos} />
      <Read todos={todos} setTodos = {setTodos} />
    </div>
  )
}

export default App;