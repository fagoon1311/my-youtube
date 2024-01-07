import React, { useEffect, useState } from 'react'
import { YOUTUBE_COMEDY_VIDEOS } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'


const ComedyVideos = () => {
  const [comedyVideos, setComedyVideos] = useState([])
  useEffect(()=>{
    getComedyVideos()
  }, [])
  
  const getComedyVideos = async() =>{
    const data = await fetch(YOUTUBE_COMEDY_VIDEOS)
    const json = await data.json()
    // console.log(json.items)
    setComedyVideos(json.items)

  }
  return (
    <div className='flex flex-wrap'>
      {comedyVideos.map((video)=>(
      <Link to={"/watch?v="+ video.id} key={video.id} ><VideoCard info={video}/></Link>
      ))}
    </div>
  )
}

export default ComedyVideos