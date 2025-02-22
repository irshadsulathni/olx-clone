import { createContext, useEffect, useState } from "react"
import Menubar from "./Menubar"
import Navbar from "./Navbar"
import Home from "./Home"
import Footer from "./Footer"
export const userContext = createContext<{user:string| null ,setUser:(user:string )=>void }>({user:null ,setUser:()=>{}})


function Main() {
    const [user,setUser] = useState(String)

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
        <userContext.Provider value={{user,setUser}} >
          <Navbar />
          <Menubar />
          <Home products={product} />
          <Footer />
        </userContext.Provider>
        
    </div>
  )
}

export default Main