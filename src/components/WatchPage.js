import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'

const WatchPage = () => {
    const [searchparams] = useSearchParams()
    // console.log(searchparams.get("v"))
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='flex flex-col'>
      <div className='px-5'>
        <iframe width="1060" 
        height="530" 
        src={"https://www.youtube.com/embed/"+searchparams.get("v")} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullscreen>
        </iframe>
      </div>
      <CommentsContainer />
    </div>
  )
}

export default WatchPage