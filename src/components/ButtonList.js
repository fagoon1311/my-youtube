import React from 'react'
import Button from './Button';

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Indie"/>
      <Button name="Gaming"/>
      <Button name="Music"/>
      <Button name="Sports"/>
      <Button name="News"/>
      <Button name="Racing"/>
      <Button name="Live"/>
      <Button name="T-Series"/>
    </div>
  )
}

export default ButtonList;