import React from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Catalog from '../Catolog/Catalog'
import { HousePlants } from '../../mock/mock'

export const HomePage = () => {
  return (
    <div className="homepage">
      <Header/>
      <Sidebar/>
      <Outlet/>
      
      
    </div>
  )
}
