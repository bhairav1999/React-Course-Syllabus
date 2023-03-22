import React, { useContext, useState } from "react";

import {employeContext} from './EmployeStore'



const AddNewEmployee = () => {

const [empId,setEmpId]=useState(0)
const [empName,setName]=useState('')
const [empcomName,setcomName]=useState('')

// usecontect

const empcontext= useContext(employeContext)
console.log(empcontext)

const savedata=(e)=>{
  const empObj={
    empId:empId,
    empName:empName,
    empcomName:empcomName
  }
  // alert(JSON.stringify(empObj))
  empcontext.saveEmploye(empObj)
e.preventDefault()
}

  return (
    <div>
      <div className="mb-4">
        <h5>Add new employeee</h5>
      </div>
      {/* form */}
      <form action="" onSubmit={savedata}>
        <div className="d-flex justify-content-center">
          <div>
            <div>
              EmpolyeId: <input type="number" name="" id="" value={empId} onChange={(e)=>setEmpId(e.target.value)} />
            </div>
          </div>
          <div>
            <div>
              EmpolyeName: <input type="text" name="" id="" value={empName} onChange={(e)=>setName(e.target.value)}/>
            </div>
          </div>
          <div>
            <div>
              EmpolyeCompanyName: <input type="text" name="" id="" value={empcomName} onChange={(e)=>setcomName(e.target.value)}/>
            </div>
          </div>
          <div></div>
        </div>
        <div className="justify-content-center mt-3" >
          <div><button type="submit">Submit</button></div>
        </div>
      </form>
    </div>
  );
};

export default AddNewEmployee;
