import flower1 from '../../img/flower1.jpg'
import { NavLink, Route } from 'react-router-dom'
import { useParams} from 'react-router-dom'
import { useContext } from 'react'
import { useState,useEffect } from 'react' 
import { HousePlants } from './HousePlants/HousePlants'
import { NewArrivals } from './HousePlants/NewArrivals'
import { Sale } from './HousePlants/Sale'
import { PotterPlants } from './PotterPlants/PotterPlants'
import { Seeds } from './Seeds/Seeds'
import { PlantsContext } from '../../context/Context'

const Catalog = ()=>{
  const active = ({isActive})=>{
    
    return {
      color: isActive? 'rgba(70, 163, 88, 1)':'rgba(61, 61, 61, 1)',
      borderBottom: isActive? '2px solid rgba(70, 163, 88, 1)':'none'
  }
  }
  const [Contextdata, setContextData] = useContext(PlantsContext)
  
  const {flowerCati} = useParams()
  
  const res = Contextdata.filter((val)=>{
    return val.name === flowerCati
    
  })
  console.log(res.val);

  return(
    <div className="catalog">
      <div className="catalog__navbar mb-s">
        <div className="catalog__navbar-box">
          <NavLink className="heading5" style={active} exact to={'/home/houseplants'}>All Plants</NavLink>
          <NavLink className="heading5" style={active} to={'/home/houseplant/newarr'}>New Arrivals</NavLink>
          <NavLink className="heading5" style={active} to={'/home/houseplant/sale'}>Sale</NavLink>

        </div>
        <div className="catalog__sort-box">
          <h1 className="heading5">Sort by:</h1>
          <select className="catalog__sort">
            <option value="">Default sorting</option>
            <option value="">Alphabetical</option>
            <option value="">Size</option>
            <option value="">Type</option>


          </select>

        </div>
      </div>
      <div className="catalog__box">
        {
          // res['val'].map((val)=>{
          //   console.log(val);
          //   // return (
          //   //   <div className="catalog__flower">
          //   //       <img src={flower1} alt="flower picture" className="catalog__flower-pic" />
          //   //       <h1 className="heading5 catalog__heading">{val.flower}</h1>
          //   //       <p className="price">${val.price}</p>
        
          //   //   </div>
          //   // )
            
          // })
        }
       
        
       
      
        
      </div>
      <div className="catalog__numbers">
          <button className="catalog__list-number">1</button>
          <button className="catalog__list-number">2</button>
          <button className="catalog__list-number">3</button>
          <button className="catalog__list-number">4</button>
          <button className="catalog__list-number">&gt;</button>
      </div>


    </div>
  )
}

export default Catalog