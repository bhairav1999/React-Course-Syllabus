import React from 'react'
import Chaild from './Chaild';
function Parent() {
    const getdata=(greet)=>{
  alert(greet)
    }
  return (
    <div>
      <Chaild sendata={getdata}/>
    </div>
  )
}

export default Parent
