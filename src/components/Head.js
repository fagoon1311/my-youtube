import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SUGGESTION_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestion, setSuggestion] = useState([])
  const [showSuggestion, setShowSuggestion] = useState(false)
  const searchCache = useSelector((store)=> store.search)

  useEffect(()=>{
    //API call
    const timer = setTimeout(()=>{
      // console.log(searchCache)
      if(searchCache[searchQuery]){
      setSuggestion(searchCache[searchQuery])
      // console.log("Cache called" + searchQuery)
    }
    else{
      getSearchSuggestion()
    }
    
    },200)
    return ()=>{
      clearTimeout(timer)
    }
  }, [searchQuery])

  const getSearchSuggestion = async() => {
  console.log("api-"+searchQuery)

    const data = await fetch(YOUTUBE_SUGGESTION_API+ searchQuery)
    const json = await data.json()
    // console.log(json[1])
    setSuggestion(json[1])
    // update in cache
    dispatch(cacheResults({
      [searchQuery] : json[1]
    }))

  }

  const dispatch = useDispatch()
  const toggleMenuHandler = () =>{
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1' >
        <img onClick={()=>toggleMenuHandler()}  className='h-8 cursor-pointer' alt="menu" src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"></img>
        <a href="/"><img className='h-8 mx-2' alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"></img></a>
      </div>
      <div className='col-span-10 px-10'>
        <div>
        <input type='text' className='px-5 w-1/2 border border-gray-400 rounded-l-full p-2 ' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=>setShowSuggestion(true)} onBlur={()=>setShowSuggestion(false)}></input>
        <button className='border border-gray-400 rounded-r-full p-2 bg-gray-200'>🔍</button>  
        </div>
        { showSuggestion&&(
        <div className='fixed bg-white w-[30rem] px-5 py-2 shadow-md border border-gray-100'>
          <ul>
            {suggestion.map((s)=>(<li key={s} className='py-2 hover:bg-slate-100 shadow-sm'>🔍{s}</li>))}  
          </ul>
        </div>
        )}
      </div>
      <div className='col-span-1'>
        <img className="h-8" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="user"></img>  
      </div>  
    </div>
  )
}

export default Head;