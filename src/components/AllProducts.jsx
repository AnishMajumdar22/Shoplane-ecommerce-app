import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Endpoints from '../api/Endpoints'
import Products from './Products'


function AllProducts() {
  const[allProducts, setAllProducts] = useState([])
  function getData(){
    axios.get(Endpoints.ALL_PRODUCTS)
    .then((response)=>{
      console.log(response.data)
      setAllProducts(response.data)
    })
    .catch((error)=>console.log(error))
  }
  useEffect(()=>{
    getData()
  },[])
   
  return (
    <div className="container">
      <h2 className="text-center">All Products</h2>
      <div className="row mt-5 mx-2">
        {
          allProducts.map((products,index)=>(
            <Products key={index} data={products}/>
          ))
        }

      </div>
    </div>
  )
}

export default AllProducts