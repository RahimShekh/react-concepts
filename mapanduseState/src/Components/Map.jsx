import React from 'react'

function Map() {
    
  const profile = [
    {name:"rahim",age:23},
    {name:"vikas",age:32},
    {name:"kaka",age:21},

  ]
  const showProfile = profile.map((elem,index)=>{
    return <li key={index}>name:{elem.name} age:{elem.age}</li>
  })

  return (
    <div>
      <ol>{showProfile}</ol>
    </div>
  )
}

export default Map