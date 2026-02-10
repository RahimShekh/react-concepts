import React from 'react'
import Home from '../components/Home'
import Product from '../components/Product'
import Service from '../components/Service'
import About from '../components/About'
import {Routes,Route} from "react-router-dom";
import ProductDetails from '../components/ProductDetails'
import ServiceDetails from '../components/ServiceDetails'
import ServiceUpdate from '../components/ServiceUpdate'

function MainRoute() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Product' element={<Product/>} />
        <Route path='/Product/details/:name' element={<ProductDetails/>} /> 
        
        <Route path='/Service' element={<Service/>}>
        <Route path='/Service/details/' element={<ServiceDetails/>} />  
        <Route path='/Service/update/' element={<ServiceUpdate/>} />  
        </Route>

        <Route path='/About' element={<About/>} />
      </Routes>
  )
}
// product details  is dynamic route
//nestion routed servicedetails

export default MainRoute