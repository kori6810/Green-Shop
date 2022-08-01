import { HousePlants, PotterPlants,Seeds } from "../mock/mock";
import { createContext, useState } from "react";
export const PlantsContext = createContext()
export const Context = ({children})=>{
  
  const [data, setData]= useState([
    {name:'houseplants',val:HousePlants},
    {name:'potterplants',val:PotterPlants},
    {name:'seeds',val:Seeds}
  ])
  
  return(
    <PlantsContext.Provider value={[data, setData]}>
      {children}
    </PlantsContext.Provider>
  )
}