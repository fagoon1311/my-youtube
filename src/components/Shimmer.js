import React from 'react'

const Shimmer = () => {
  return (
   <div className="">
       {Array(50).fill(" ").map((e,index) => (<div key={index} className=""></div>))}
    </div>
    )
}


export default Shimmer