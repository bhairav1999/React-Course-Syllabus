import React,{useState} from 'react'
import Child from './Child'
export const MessageContext=React.createContext()
function PropfFunParent() {

const [count , setCount]=useState("hiiiii")


  return (
    <div>
    <MessageContext.Provider value={count}>
    <Child/>
    </MessageContext.Provider>
      
    </div>
  )
}

export default PropfFunParent
