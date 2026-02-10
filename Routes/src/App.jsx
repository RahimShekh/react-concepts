import React from 'react'

import Nav from './components/Nav';
import MainRoute from './Routes/MainRoute';

function App() {
  return (
    <div className='bg-gray-800 w-full h-screen text-white'>
      <Nav />
      <MainRoute />
    </div>
  )
}

export default App