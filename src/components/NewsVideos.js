import React, { useEffect, useState } from 'react'
import { YOUTUBE_NEWS_VIDEOS } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'


const NewsVideos = () => {
    const[newsVideos, setnewsVideos] = useState([])
    useEffect(()=>{
        getNewsVideos()
    },[])

    const getNewsVideos = async() => {
        const data = await fetch(YOUTUBE_NEWS_VIDEOS)
        const json = await data.json()
        setnewsVideos(json.items)
    }
    
  return (
    <div className='flex flex-wrap'>
        {newsVideos.map((video)=>(
            <Link to={"/watch?v="+ video.id} key={video.id}><VideoCard info={video}/></Link>
        ))
            
        }
    </div>
  )
}

export default NewsVideos