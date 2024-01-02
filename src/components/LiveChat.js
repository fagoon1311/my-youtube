import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from "react-redux" 
import { addMessage } from '../utils/chatSlice'
import { makeRandomMessage, randomNameGenerator } from '../utils/helper'

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("")
    const dispatch = useDispatch()
    const chatMessages = useSelector((store)=>store.chat.messages)
    // console.log(chatMessages)
    useEffect(()=>{
        const i = setInterval(()=>{
            console.log("polling api")
            dispatch(addMessage({
                name:randomNameGenerator(),
                message:makeRandomMessage(20)
            }));

        }, 1000);

        return() =>{
            clearInterval(i)
        };

    }, [])
  return (
    <>
    <div className='w-full h-[530px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>  
        {
            // console.log(chatMessages?.length)
            chatMessages&&chatMessages.map((c, i)=>(<ChatMessage name={c.name} message={c.message}/>))
        }
        {/* <ChatMessage name="Fagoon" message="testing live chat......."/> */}
        </div>
        
    </div>
    <form className='border border-black rounded-lg' onSubmit={(e)=>{
        e.preventDefault()
        dispatch(addMessage({
            name:"Fagoon Sharma",
            message: liveMessage
        }))
        setLiveMessage("")
        }}>
        <input className='w-3/4 m-2 px-2 border border-black' type='text' value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}}></input>
        <button className='bg-sky-500 rounded-md px-1 mx-1 hover:cursor-pointer border border-black'>Send</button>
    </form>
    </>
  )
}

export default LiveChat