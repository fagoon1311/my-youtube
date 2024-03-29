import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {
    const [searchparams] = useSearchParams()
    // console.log(searchparams.get("v"))
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
    const checkDark = useSelector((store)=>store.darkmode.isDarkMode)
  return (
    <div className={`flex flex-col w-full ${checkDark? "bg-black" : "bg-white"}`}>
      <div className='px-5 flex w-full'>
        <div>
        <iframe width="1060" 
        height="530" 
        src={"https://www.youtube.com/embed/"+searchparams.get("v")} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
        </iframe>
        </div>
        <div className='w-full'>
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  )
}

export default WatchPage