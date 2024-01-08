import React, { useEffect, useState } from 'react'
import { YOUTUBE_GAMING_VIDEOS } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'


const GamingVideos = () => {
  const [gamingVideos, setGamingVideos] = useState([])
  useEffect(()=>{
    getGamingVideos()
  }, [])
  
  const getGamingVideos = async() =>{
    const data = await fetch(YOUTUBE_GAMING_VIDEOS)
    const json = await data.json()
    // console.log(json.items)
    setGamingVideos(json.items)

  }
  return (
    <div className='flex flex-wrap'>
     
      {gamingVideos.map((video)=>(
      <Link to={"/watch?v="+ video.id} key={video.id} ><VideoCard info={video}/></Link>
      ))}
    </div>
  )
}

export default GamingVideos