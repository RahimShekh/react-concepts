import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product() {
    const navigate = useNavigate();          //for child routes

    const navigateHandler = (name)=>{
         navigate(`/product/details/${name}`)                                           
    }
    //in func we cant use link tag to navigate
  return (
    <div>
        <div className='ml-70 mb-10'>
        <h1 className='text-3xl mt-2'>Products</h1>
        <h2 className='mt-2'>product 1</h2>
        <button onClick={()=>navigateHandler("Product 1")} 
        className='bg-amber-50 px-3 mt-3 py-2 rounded-md text-black'>see details</button>
        </div>
        <div className='ml-70 mb-10'>
        <h1 className='text-3xl mt-2'>Products</h1>
        <h2 className='mt-2'>product 2</h2>
        <button onClick={()=>navigateHandler("Product 2")} 
        className='bg-amber-50 px-3 py-2 mt-3 rounded-md text-black'>see details</button>
        </div>
        <div className='ml-70 mb-10'>
        <h1 className='text-3xl mt-2'>Products</h1>
        <h2 className='mt-2'>product 3</h2>
        <button onClick={()=>navigateHandler("Product 3")}
        className='bg-amber-50 px-3 py-2 mt-3 rounded-md text-black'>see details</button>
        </div>
    </div>
  )
}

export default Product