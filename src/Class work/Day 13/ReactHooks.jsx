import React,{useState} from 'react'

function ReactHooks() {
    const [color,setcolr]= useState("red")

    const changecolor =()=>{
        setcolr("green")
    }
  return (
    <div>
      <hi>hello hooks</hi>
      <button onClick={changecolor}>name</button>
    </div>
  )
}

export default ReactHooks
