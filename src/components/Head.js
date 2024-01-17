import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SUGGESTION_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { Link, useNavigate } from 'react-router-dom';
import { toggleDarkMode } from '../utils/darkModeSlice';


const Head = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestion, setSuggestion] = useState([])
  const [showSuggestion, setShowSuggestion] = useState(false)
  const searchCache = useSelector((store)=> store.search)
  // const navigate = useNavigate()
  const checkDark = useSelector((store)=>store.darkmode.isDarkMode)
  console.log(checkDark)
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

  const handleDarkMode = () =>{
    dispatch(toggleDarkMode())
  }

  useEffect(() => {
    const handleScroll = () => {
      // Hide suggestions when scrolling
      setShowSuggestion(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`grid grid-flow-col p-5 m-2 shadow-lg ${checkDark ? 'bg-black' : 'bg-white'}`}>
      <div className='flex col-span-1' >
        <img onClick={()=>toggleMenuHandler()}  className='h-8 cursor-pointer' alt="menu" src={checkDark? "https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/310c1c38-5546-42b4-7d7a-cac047cc8e00/public" : "https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"}></img>
        <a href="/"><img className='h-8 mx-2' alt="logo" src={checkDark?"https://freelogopng.com/images/all_img/1656504144youtube-logo-png-white.png":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"}></img></a>
      </div>
      {/* <Link to="search/iphone">xyz</Link> */}
      <div className='col-span-10 px-10'>
        <div>
        <input type='text' className='px-5 w-1/2 border border-gray-400 rounded-l-full p-2 ' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=>setShowSuggestion(true)} onBlur={()=>setShowSuggestion(true)}></input>
        <button className='border border-gray-400 rounded-r-full p-2 bg-gray-200'>🔍</button>  
        </div>
        { showSuggestion&&(
        <div className='fixed bg-white w-[30rem] px-5 py-2 shadow-md border border-gray-100 '>
          <ul>
            {suggestion.map((s)=>(<Link to={"search/"+s} onClick={()=>{
              setShowSuggestion(false)
            }}><li  className='py-2 hover:bg-slate-100 shadow-sm'>🔍{s}</li></Link>))}  
          </ul>
        </div>
        )}
      </div>
      <div className='col-span-1 flex flex-wrap'>
        <img className="h-8" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="user"></img>  
        <button className='mx-2 px-2 bg-slate-200  border border-stone-800 h-8 rounded-2xl' onClick={()=>{
          handleDarkMode()
        }}>{checkDark ? "Lightmode" : "Darkmode"}</button>
      </div>  
    </div>
  )
}

export default Head;