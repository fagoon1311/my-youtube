import React, { useEffect, useState } from 'react'
import { YOUTUBE_MUSIC_VIDEOS } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'


const MusicVideos = () => {
  const [musicVideos, setMusicVideos] = useState([])
  useEffect(()=>{
    getMusicVideos()
  }, [])
  
  const getMusicVideos = async() =>{
    const data = await fetch(YOUTUBE_MUSIC_VIDEOS)
    const json = await data.json()
    // console.log(json.items)
    setMusicVideos(json.items)

  }
  return (
    <div className='flex flex-wrap'>
      {musicVideos.map((video)=>(
      <Link to={"/watch?v="+ video.id} key={video.id} ><VideoCard info={video}/></Link>
      ))}
    </div>
  )
}

export default MusicVideos