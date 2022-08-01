import React from 'react'
import { useContext } from "react"
import { PlantsContext } from '../../../context/Context'
import flower1 from '../../../img/flower1.jpg'


export const PotterPlants = () => {
  let [data, setData] = useContext(PlantsContext)
  
  return(
    <>
    {
      data[1]["all"].map((val)=>{
        console.log(val.flower);
        return (
          <div className="catalog__flower">
              <img src={flower1} alt="flower picture" className="catalog__flower-pic" />
              <h1 className="heading5 catalog__heading">{val.flower}</h1>
              <p className="price">${val.price}</p>
    
          </div>
        )
        
      })
    }
    </>
  )
  
}
