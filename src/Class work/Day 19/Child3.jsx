import React from 'react'
import { useContext } from 'react'
import { MessageContext } from './ParentFun'
function Child3(props) {
    const msg=useContext(MessageContext)
  return (
    <div>
      <h4>child 33: {msg}</h4>
    </div>
  )
}

export default Child3
