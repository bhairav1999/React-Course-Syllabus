import React from 'react'
import { useContext } from 'react'
import {MessageContext} from './PropfFunParent'
function Child2(props) {
    const count=useContext(MessageContext)
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Child2
