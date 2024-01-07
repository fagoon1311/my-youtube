import React, { useEffect, useState } from 'react'
import { YOUTUBE_SPORTS_VIDEOS } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'


const SportsVideos = () => {
  const [sportsVideos, setSportsVideos] = useState([])
  useEffect(()=>{
    getSportsVideos()
  }, [])
  
  const getSportsVideos = async() =>{
    const data = await fetch(YOUTUBE_SPORTS_VIDEOS)
    const json = await data.json()
    // console.log(json.items)
    setSportsVideos(json.items)

  }
  return (
    <div className='flex flex-wrap'>
      {sportsVideos.map((video)=>(
      <Link to={"/watch?v="+ video.id} key={video.id} ><VideoCard info={video}/></Link>
      ))}
    </div>
  )
}

export default SportsVideos