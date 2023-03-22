import React from 'react'

const AddNewBtn = (props) => {
  return (
    <div className='text-end mt-4 me-4'>
      <button onClick={()=>props.getData(true)}>click</button>
     
    </div>
  )
}

export default AddNewBtn
