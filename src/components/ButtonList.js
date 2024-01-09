import React from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';

const ButtonList = () => {
  return (
    <div className='flex'>
      <Link to="/"><Button name="All"/></Link>
      {/* <Button name="Indie"/> */}
      <Link to="/gaming"><Button name="Gaming"/></Link>
      <Link to="/music"><Button name="Music"/></Link>
      <Link to="/sports"><Button name="Sports"/></Link>
      <Link to="/news"><Button name="News"/></Link>
      <Link to="/autovehicle"><Button name="Autos&Vehicles"/></Link>
      <Link to="/comedy"><Button name="Comedy"/></Link>
      {/* <Button name="Live"/>
      <Button name="T-Series"/> */}
    </div>
  )
}

export default ButtonList;