import React from 'react'

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
       {Array(50).fill(" ").map((e,index) => (<div key={index} className="w-72 h-48 bg-slate-200 m-2 p-2"></div>))}
    </div>
  
    )
}


export default Shimmer