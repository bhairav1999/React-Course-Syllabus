import React, { createContext, useState } from "react";
import EmployMain from "./EmployMain";

export const employeContext = createContext();

function EmployeStore() {

  
  const [employee, setEmploye] = useState([]);


  // form mdla data add krnyasathi
const saveEmploye=(empObj)=>{
   console.log(empObj)
   setEmploye([...employee,empObj])

}

  return (
    <employeContext.Provider value={{employee,saveEmploye}}>
      <EmployMain />
    </employeContext.Provider>
  );
}

export default EmployeStore;
