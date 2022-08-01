import Navbar from "../components/Navbar/Navbar"
import Header from "../components/HomePage/Header/Header"
import Sidebar from "../components/HomePage/Sidebar/Sidebar"
import Catalog from "../components/Catolog/Catalog"
import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../components/HomePage/HomePage"
import { HousePlants } from "../mock/mock"

const Root = ()=>{
  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Navigate to={'/home'}/>}/>
        <Route path="/home" element={<HomePage/>}>
          <Route path="/home/:flowerCati" element={<Catalog/>}/>
         
        </Route>
        

        
        
        
        

        
      </Routes>
      

      
      

    </>
  )
  
 }
 export default Root