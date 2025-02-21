import { useEffect, useState } from "react"
import Menubar from "./Menubar"
import Navbar from "./Navbar"
import Home from "./Home"


function Main() {

    const [product, setProduct] = useState([])

    const getProducts = ()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProduct(json))
    }
    
    useEffect(()=>{
        getProducts()
    },[])

  return (
    <div>
        <Navbar />
        <Menubar />
        <Home products={product} />
    </div>
  )
}

export default Main