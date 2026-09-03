import { useState } from 'react';
import Cards from './components/Cards';
import Form from './components/Form';

function App() {
  const [users,setUsers] = useState([]);

  const handleFormSubmit = (data) =>{
    setUsers([...users,data])
  }

  const handleRemove = (id)=>{
    setUsers(()=>users.filter((elem,idx)=> idx != id));
  }
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
      <div>
        <Cards handleRemove={handleRemove} users={users} />
        <Form handleFormSubmit={handleFormSubmit} />
      </div>
    </div>
  )
}

export default App