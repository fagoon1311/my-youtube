import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch()
  const toggleMenuHandler = () =>{
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1' >
        <img onClick={()=>toggleMenuHandler()}  className='h-8 cursor-pointer' alt="menu" src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"></img>
        <a href="/"><img className='h-8 mx-2' alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"></img></a>
      </div>
      <div className='col-span-10 px-10'>
        <input type='text' className='w-1/2 border border-gray-400 rounded-l-full p-2 '></input>
        <button className='border border-gray-400 rounded-r-full p-2 bg-gray-200'>🔍</button>  
      </div>
      <div className='col-span-1'>
        <img className="h-8" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="user"></img>  
      </div>  
    </div>
  )
}

export default Head;