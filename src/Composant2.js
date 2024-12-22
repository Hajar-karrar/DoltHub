import React from "react";
import "./Composant2.css"

export default function Composant2({ salaries }) {
  return (
    <div className="container2">
      <h2 className="h2hajar">Liste des Salariés</h2>
      <table border="1" >
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Fonction</th>
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
