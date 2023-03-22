import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [color,setcolr]=useState("red")




// com ui scucccfull zalyavr Ui run hoto
    useEffect(()=>{
        console.log("use effect")

    })
    const changecolor=(()=>{
         
    })
  return (
    <div>
      <h1>use effect</h1>
      <h3>color: {color}</h3>
      <button onClick={changecolor}>update</button>
    </div>
  )
}

export default UseEffect
