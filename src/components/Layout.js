import React from 'react'
import Head from './Head'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <>
   <Head/>
   <Outlet/>
   </>
  )
}

export default Layout