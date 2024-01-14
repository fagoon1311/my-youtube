import React, { useEffect, useState } from 'react'
//import { GOOGLE_API_KEY } from "../utils/constants"
import { Link, useParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import VideoCard from './VideoCard'
import VideoSearchCard from './VideoSearchCard'
import Shimmer from './Shimmer'


const SearchPage = () => {
  const params = useParams()
  //console.log(params)
  // const api_string = YOUTUBE_SEARCH_API
  // const [baseUrl, queryString] = api_string.split('?')
  // const queryParams = new URLSearchParams(queryString)
  // queryParams.set('q', queryParams.get('q') + params.searchId)
  // const modifiedString = baseUrl + '?' + queryParams.toString()
  // console.log(modifiedString);
  
  const [searchResults, setSearchResults] = useState({})
  useEffect(()=>{
    getSearchResults()
  }, [params.searchId])

  const getSearchResults = async() =>{
    const api_string = YOUTUBE_SEARCH_API
    const [baseUrl, queryString] = api_string.split('?')
    const queryParams = new URLSearchParams(queryString)
    queryParams.set('q', queryParams.get('q') + params.searchId)
    const modifiedString = baseUrl + '?' + queryParams.toString()
    const data = await fetch(modifiedString)
    const json = await data.json()
    setSearchResults(json?.items)
    // console.log(json.items)
  }
  
  console.log(searchResults)
  if (!Object.keys(searchResults).length) return <Shimmer />;
  return (
    <div className='flex flex-wrap'>
     
      {searchResults.map((video)=>(
      <Link key={video.id.videoId} to={"/watch?v="+video.id.videoId}><VideoCard info={video}/></Link>))}
      
    </div>
  )
}

export default SearchPage