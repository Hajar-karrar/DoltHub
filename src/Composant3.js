import React, { useState } from 'react';
import './Compasont3.css';

const Composant3 = () => {
  // Données fictives pour les salariés
  const [salaries] = useState([
    {
      _id: "s1",
      nomsal: "Alami",
      prenomsal: "Sara",
      fonction: "Technicien",
      service: { codeser: "1", nomser: "informatique" },
    },
    {
      _id: "s2",
      nomsal: "Hilal",
      prenomsal: "Hana",
      fonction: "Gestionnaire",
      service: { codeser: "2", nomser: "logistique" },
    },
    {
      _id: "s3",
      nomsal: "Chams",
      prenomsal: "Nabil",
      fonction: "Gestionnaire",
      service: { codeser: "2", nomser: "logistique" },
    },
  ]);

  const [serviceSearch, setServiceSearch] = useState('');
  const [filteredSalaries, setFilteredSalaries] = useState([]);

  const handleSearch = () => {
    if (!serviceSearch.trim()) {
      setFilteredSalaries([]);
      return;
    }

    const results = salaries.filter((salarie) =>
      salarie.service.nomser.toLowerCase().includes(serviceSearch.toLowerCase())
    );
    setFilteredSalaries(results);
  };

  const handleInputChange = (e) => {
    setServiceSearch(e.target.value);
    if (e.target.value.trim() === '') {
      setFilteredSalaries([]);
    } else {
      handleSearch();
    }
  };

  return (
    <div className="containerr mt-4">
      <h1 className="h4">Recherche par Service</h1>
      <div className="row mb-3">
        <div className="col-md-8 offset-md-2">
          <label htmlFor="serviceSearch" className="ll2">Nom du service</label>
          <input
            type="text"
            id="serviceSearch"
            className="form-controll"
            placeholder="Entrer le nom du service"
            value={serviceSearch}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="text-center">
        <button className="btnn" onClick={handleSearch}>
          Rechercher
        </button>
      </div>
      <div className="mt-4">
        {filteredSalaries.length > 0 ? (
          <table className="">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
              </tr>
            </thead>
            <tbody>
              {filteredSalaries.map((salarie) => (
                <tr key={salarie._id}>
                  <td>{salarie.nomsal}</td>
                  <td>{salarie.prenomsal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text22">
            {serviceSearch.trim() === ''
              ? 'Entrez un nom de service pour effectuer une recherche.'
              : 'Aucun salarié trouvé pour ce service.'}
          </p>
        )}
      </div>
    </div>
  );
};

export default Composant3;
