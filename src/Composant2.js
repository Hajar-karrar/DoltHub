import React from "react";
import "./Composant2.css"

export default function Composant2({ salaries }) {
  return (
    <div className="container2">
      <h2 className="h2hajar">List of Employees</h2>
      <table border="1" >
        <thead>
          <tr>
            <th>Surname</th>
            <th>First Name</th>
            <th>Function</th>
            <th>Service</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map((salarie) => (
            <tr key={salarie._id}>
              <td>{salarie.nomsal}</td>
              <td>{salarie.prenomsal}</td>
              <td>{salarie.fonction}</td>
              <td>{salarie.service.nomser}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
