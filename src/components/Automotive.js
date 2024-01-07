import React, { useEffect, useState } from 'react'
import { YOUTUBE_CARS_VIDEOS } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'


const CarVideos = () => {
  const [carVideos, setCarVideos] = useState([])
  useEffect(()=>{
    getCarVideos()
  }, [])
  
  const getCarVideos = async() =>{
    const data = await fetch(YOUTUBE_CARS_VIDEOS)
    const json = await data.json()
    // console.log(json.items)
    setCarVideos(json.items)

  }
  return (
    <div className='flex flex-wrap'>
      {carVideos.map((video)=>(
      <Link to={"/watch?v="+ video.id} key={video.id} ><VideoCard info={video}/></Link>
      ))}
    </div>
  )
}

export default CarVideos