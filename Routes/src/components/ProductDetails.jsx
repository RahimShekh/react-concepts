import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
//child route
function ProductDetails() {
  const navigate = useNavigate();
  const params = useParams();
  // const navigateHandler = ()=>{
  //   navigate("/Product")  
  // }
  console.log(params);
  return (
    <div className='ml-70'>
        <h1 className='text-3xl font-light'>Products name</h1>
        <h1 className='text-2xl'>Products details</h1>
        <button onClick={()=>navigate(-1)}
        //onClick={navigateHandler} // we can use -1 also to go back where we came from
        className='bg-amber-50 px-3 py-2 mt-3 rounded-md text-black'>go back</button>
    </div>
  )
}

export default ProductDetails