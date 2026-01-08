import React from 'react'
import { useState } from 'react'
import Data from './components/Data'
function App() {
  const [name,setName] = useState([
    {id:"rahim",age:20},
  ])
  return (
    <div>
      <h1>App</h1>
      <h1><Data name = {name} setName={setName}/></h1>
    </div>
  )
}

export default App