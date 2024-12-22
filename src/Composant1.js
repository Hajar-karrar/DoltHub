import React, { useState } from "react";
import './Comp.css';

const Composant1 = () => {
  // States for each input field
  const [matricule, setMatricule] = useState("");
  const [marque, setMarque] = useState("");
  const [dateMiseEnCirculation, setDateMiseEnCirculation] = useState("");
  const [couleur, setCouleur] = useState("");

  // State for recap information
  const [recap, setRecap] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save recap information
    setRecap({ matricule, marque, dateMiseEnCirculation, couleur });

    // Clear the fields
    setMatricule("");
    setMarque("");
    setDateMiseEnCirculation("");
    setCouleur("");
  };

  return (
    <div className="ap">
        <div className="b">
      <h1 className="hajar">Gestion Voitures</h1>
      <form onSubmit={handleSubmit} className="ff">
        <div>
          <label className="ll">Matricule:</label><br />
          <input
          className="in"
            type="text"
            value={matricule}
            onChange={(e) => setMatricule(e.target.value)}
          />
        </div>
        <div>
          <label className="ll">Marque:</label> <br />
          <input
          className="in"
            type="text"
            value={marque}
            onChange={(e) => setMarque(e.target.value)}
          />
        </div>
        <div>
          <label className="ll">Date de mise en circulation:</label><br />
          <input
          className="in"
            type="date"
            value={dateMiseEnCirculation}
            onChange={(e) => setDateMiseEnCirculation(e.target.value)}
          />
        </div>
        <div>
          <label className="ll">Couleur:</label> <br />
          <input
          className="in"
            type="text"
            value={couleur}
            onChange={(e) => setCouleur(e.target.value)}
          />
        </div>
        <button type="submit" className="bhajar">Confirmer</button>
      </form>

      {recap && (
        <div className="recap-container">
        <h2 className="hhh2">Récapitulatif des informations :</h2>
        <ul className="ull">
          <li className="lii">Matricule: {recap.matricule}</li>
          <li className="lii">Marque: {recap.marque}</li>
          <li className="lii">Date Mise en circulation: {recap.dateMiseEnCirculation}</li>
          <li className="lii">Couleur: {recap.couleur}</li>
        </ul>
      </div>
      )}
    </div>
    </div>
  );
};

export default Composant1;