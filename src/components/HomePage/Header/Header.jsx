import bigPlant from '../../../img/bigplant.png'

const Header = ()=>{
  return(
    <div className="header mb-m">
      <div className="header__content-box">
        <p className="header__welcome">
          Welcome to greenshop
        </p>
        <h1 className="primary-heading">
          Let's make a better <p className="primary-heading--green">Planet</p> 
        </h1>
        <p className="text mb-m">
          We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
        </p>
        <button className="btn__green">SHOP NOW</button>
      </div>
      <div className="header__img-box">
        <img src={bigPlant} alt="big plant picture" className='header__imgBig'/>
        <img src={bigPlant} alt="big plant picture" className='header__imgSmall'/>
      </div>
    </div>
  )
}
export default Header