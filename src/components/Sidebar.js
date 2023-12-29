import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
  if (!isMenuOpen) return null // early return
  return (
    <div className='shadow-md w-48 p-5'>
      
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
        <li>News</li>
      </ul>

      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>News</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>News</li>
      </ul>
    </div>
  )
}

export default Sidebar;