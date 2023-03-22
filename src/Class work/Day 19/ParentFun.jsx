
import React ,{  useState } from 'react'
import Child from './Child'
export const MessageContext = React.createContext()



function ParentFun() {
    const [msg ,setMsg]=useState("welcom")
  return (
    <div>
      <MessageContext.Provider value={msg}>
      <Child/>
      </MessageContext.Provider>
      
    </div>
  )
}

export default ParentFun
