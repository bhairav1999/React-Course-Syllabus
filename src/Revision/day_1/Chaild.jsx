import React from 'react'

function Chaild(props) {
  return (
    <div>
      <button onClick={()=>props.sendata("hiii")}>send data</button>
    </div>
  )
}

export default Chaild
