import { useState } from "react";
import Music from "./components/Music"
import Navbar from "./components/Navbar";

// props and state

function App()
{
  const data = [
    {
      img:"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      name:"No Cap",
      artist:"Kr$na",
      added:false
    },
    {
      img:"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      name:"Dangerous",
      artist:"Michael",
      added:false
    },
    {
      img:"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      name:"Sofi",
      artist:"Rahim",
      added:false
    },
  ]

  const [realData,setData] = useState(data);

  const handleClick = (cardIndex)=>{
    setData((prev)=>{
      return prev.map((elem,idx)=>{
        if(idx == cardIndex)
        {
          return {...elem,added:!elem.added}
        }
        return elem;
      })
    })
  }
  return(
    <div>
      <Navbar data={realData} />
     <div className="flex gap-10 mt-10 flex-wrap">
        {realData.map((elem,idx)=>(
          <Music img={elem.img} handleClick={handleClick} index={idx} name={elem.name} artist={elem.artist} added={elem.added} />
        ))}
     </div>
    </div>
  )
}

export default App;