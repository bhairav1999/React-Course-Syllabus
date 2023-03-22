import React, { PureComponent, useEffect, useRef } from 'react'

function UseRefHooks() {

const inputref=useRef()

const focusText=()=>{
    inputref.current.focus() 
}

// 2nd way use effect foucs
// useEffect(()=>{
//     inputref.current.focus()  
// })

  return (
    <div className='text-center'>
     User Name:- <input type="text"  ref={inputref} />
     <button className='mt-2' onClick={focusText}>focus</button>
    </div>
  )
}

export default UseRefHooks

