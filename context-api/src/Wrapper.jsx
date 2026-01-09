import React from 'react'
import { createContext } from 'react';

//high order component
export const demoContext = createContext(null);


function Wrapper(props) {
  console.log(props)
  return <demoContext.Provider value={"hello from context"}>
    {props.children}
    </demoContext.Provider>
  
}

export default Wrapper