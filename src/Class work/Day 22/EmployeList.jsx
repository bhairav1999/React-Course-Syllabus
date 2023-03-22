import React from "react";
import "./Employe.css";



const EmployeList = () => {
  return (
    <>
      <div>
        <h5>Employe List</h5>
      </div>
      <div className="container mt-5">
        <table >
          <thead>
          <tr>
            <th>EmpolyeId</th>
            <th>EmpolyeName</th>
            <th>EmpolyeCompanyName</th>
            <th>Opration</th>
          </tr>
          </thead>
          <tbody>

          </tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default EmployeList;
