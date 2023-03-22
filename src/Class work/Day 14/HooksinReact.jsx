import React, { useState } from 'react'

function HooksinReact() {

const [car,srycar ]=useState({
    brand:"kia",
    model:'seltos',
    id:"name"
})


// const UpdateDetails =()={
//     setcar(preState)=>{

//     }
// }


  return (
    <div>
      <h1>Car details</h1>
      <h1>Brand: {car.brand}</h1>
      <h1>Model: {car.model} </h1>
      <h1>Id: {car.id}</h1>
      {/* <button onClick={UpdateDetails}>updatecar</button> */}
    </div>
  )
}

export default HooksinReact
