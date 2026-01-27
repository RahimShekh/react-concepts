import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const userContext = createContext();

function Context(props) {
    // console.log(props.children)
    const [user,setUser] = useState([
        {
            name:"rahim",
            age: 23,
            city: "nanded"
        },
        {
            name:"kaka",
            age: "33",
            city: "punjab"
        }
    ])
  return (
    <userContext.Provider value ={{user,setUser}}>
        {props.children}
    </userContext.Provider>
  )
}

export default Context

// yaha ek context create karo phir ek provider create karo provider se hum data dusre ko provide karenge
//context api ka kaam hi data ko centralised karna phir provider ke under value se data jo bhejna hai boh bhej
// do so parent hai context api and children hai app componenet humne pure app component or baki components
// hai un sabko wrap kardiya hai context se so jisko data chahiye voh use karega