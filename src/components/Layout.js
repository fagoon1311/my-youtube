import React from 'react'
import Head from './Head'
import { Outlet } from 'react-router-dom'
import useOnline from '../utils/useOnline'

const Layout = () => {
  const isOnline = useOnline()
  if (!isOnline){
    return <h1>Seems like you are offline, please check you internet connection 🚨</h1>
  } 
  return (
   <>
   <Head/>
   <Outlet/>
   </>
  )
}

export default Layout