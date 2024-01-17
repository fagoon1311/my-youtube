import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Body = () => {
  const checkDarkTwo = useSelector((store)=>store.darkmode.isDarkMode)
  return (
    <div className={`flex ${checkDarkTwo ? 'bg-black' : 'bg-white'}`}>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Body;