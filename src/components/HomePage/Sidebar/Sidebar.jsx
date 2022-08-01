import { useContext } from "react"
import { PlantsContext } from '../../../context/Context'
import { NavLink } from "react-router-dom"

import superSale from '../../../img/SuperSale.png'
const Sidebar = ()=>{
  let [data, setData] = useContext(PlantsContext)
  const active1 = {
    color:'rgba(70, 163, 88, 1)'

  }
  const active = ({isActive})=>{
    return {
      color: isActive? 'rgba(70, 163, 88, 1)': 'rgba(61,61,61,1)',
    }


  }
  
  return(
    <div className="sidebar ">
      <h1 className="heading4">Categories</h1>
      <div className="sidebar__catigory-box mb-l">
        <div className="sidebar__catigory">
          <NavLink className='heading5 mb-s' style={active} to={'/home/houseplants'}>House Plants</NavLink>
          <NavLink className='heading5 mb-s' style={active} to={'/home/potterplants'}>Potter Plants</NavLink>
          <NavLink className='heading5 mb-s' style={active} to={'/home/seeds'}>Seeds</NavLink>
          <NavLink className='heading5 mb-s' style={active} to={'/home/houseplants'}>House Plants</NavLink>
        </div>
      
       
        
        
      </div>
      <h1 className="heading4">Price Range</h1>
      <div className="sidebar__price-range-box">
        <div className="sidebar__price-range">
          <h3>price chart on processes</h3>
        </div>
        <button className="btn__green">Filter</button>
      </div>
      <h1 className="heading4">Size</h1>
      <div className="sidebar__catigory-box">
        <div className="sidebar__catigory">
          <h1 className="heading5">Small</h1>
          <h1 className="heading5">({119})</h1>
        </div>
        <div className="sidebar__catigory">
          <h1 className="heading5">Medium</h1>
          <h1 className="heading5">(86)</h1>
        </div>
        <div className="sidebar__catigory">
          <h1 className="heading5">Large</h1>
          <h1 className="heading5">(78)</h1>
        </div>
      </div>
      <div className="sidebar__sale-box">
        {/* <img src={salePic} alt="Sale" className='sidebar__sale-bg'/> */}
        <img src={superSale} alt="Sale" className='sidebar__super-sale'/>
        <h1 className="sidebar__sale-txt">
          up to 75% off
        </h1>
        

        

      </div>
    </div>
  )
}
export default Sidebar