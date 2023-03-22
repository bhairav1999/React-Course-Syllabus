import React,{ useState } from 'react'
import HigherOrderComponent from './HigherOrderComponent';
function HoverComp() {
const [count , setcount]=useState(0)
const handleclick=()=>{
    setcount(count+1)
}


  return (
    <div>
      <h2 onMouseOver={handleclick}>hoverd</h2>
    </div>
  )
}

export default HigherOrderComponent(HoverComp)
