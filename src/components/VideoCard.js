import React from 'react'
import { useSelector } from 'react-redux';

const VideoCard = ({ info }) => {
    // console.log(info)
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    const checkDark = useSelector((store)=>store.darkmode.isDarkMode)
    
  return (
    <div className={`p-2 m-2 w-72 shadow-lg ${checkDark ? 'text-white bg-slate-800':'text-black bg-white'}`}>
        <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url}></img>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            {statistics&&<li>{statistics.viewCount} views</li>}
        </ul> 
    </div>
  )
}

export default VideoCard