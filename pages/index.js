// import fs from 'fs/promises'
// import path from 'path'

import Layout from "@/components/Layout"
import Product from "@/components/Product"
import { useEffect, useState } from "react";

//  import productItems from '../data/product'

export default function Home() {
  
  const [productItems, setProductItems] = useState([]) 
  
  useEffect(()=>{
    const fetchOrders = async ()=>{
      const response = await fetch('http://localhost:8000/products')
     
      const responseData = await response.json()
      
      setProductItems(responseData)
    }
    
    fetchOrders()
  },[])


  return (
  <Layout title = 'Home Page'>
    <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
    {
      productItems.map(pitem=>{
        // console.log({pitem})
        return (

          <Product item={pitem} key={pitem.id}></Product>
        )
      })
}

    </div>
  </Layout>
  )
}
