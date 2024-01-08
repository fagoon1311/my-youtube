import React from 'react'
import ButtonList from './ButtonList';
// import VideoContainer from './VideoContainer';
import { Outlet } from 'react-router-dom';

const MainContainer = () => {
  return (
    <div>
      <ButtonList />
      
      <Outlet>

      </Outlet>
    </div>
  )
}

export default MainContainer;