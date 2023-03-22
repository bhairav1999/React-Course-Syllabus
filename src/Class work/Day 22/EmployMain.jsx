import React, { useState } from 'react'
import './Employe.css'
import AddNewBtn from './AddNewBtn';
import AddNewEmployee from './AddNewEmployee';
import EmployeList from './EmployeList';
function EmployMain() {

    const [shoAddemployeee, setshoAddemployeee]=useState(false)
//pass data parent to child
const getData=(value)=>{
  setshoAddemployeee(value)
}

  return (
    <div className='text-center'>
      <div className='text-red text-bold shadow p-3 mb-3 bg-body rounded'>Employe mangement global state</div>
     <div> <AddNewBtn getData={getData}/></div>
     {shoAddemployeee ? <div><AddNewEmployee/></div> : <EmployeList/>}
    
    </div>
  )
}

export default EmployMain
