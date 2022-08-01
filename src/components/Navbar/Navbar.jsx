import logo from '../../img/logo.svg'
import searchIcon from '../../img/search.svg'
import cartIcon from '../../img/cart.svg'
import loginIcon from '../../img/key.svg'
import { NavLink } from 'react-router-dom'


const Navbar = ()=>{
  
 
  const active = ({isActive})=>{
    
    return {
      color: isActive? 'rgba(70, 163, 88, 1)':'rgba(61, 61, 61, 1)',
      borderBottom: isActive? '2px solid rgba(70, 163, 88, 1)':'none'
  }
  }

  return(
    <div className='navbar mb-s'>
      <div className="navbar__logo-box">
        <img src={logo} alt="Logo" className='navbar__logo'/>
        <h1 className='navbar__logoName'>GreenShop</h1>
      </div>
      <div className="navbar__navbar-items">
        <NavLink className="navbar__items" style={active} exact to={'/'}>Home </NavLink>
        <NavLink className="navbar__items" style={active} to={'/shop'}>Shop</NavLink>
        <NavLink className="navbar__items" style={active} to={'/plantcare'}>Plant Care</NavLink>
        <NavLink className="navbar__items" style={active} to={'/blogs'}>Blogs</NavLink>
      </div>
      <div className="navbar__btnBox">
        <img src={searchIcon} alt="icon"  className='searchIcon'/>
        <img src={cartIcon} alt="icon"  className='cartIcon'/>
        <button className='btn__green navbar__btn'>
          <img src={loginIcon} alt="login" className='navbar__loginIcon'/>
         
          Login  
        </button>
      </div>
    </div>
   
    
  )
}
export default Navbar