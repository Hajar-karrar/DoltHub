import React, { useState, useEffect } from "react";
import axios from "axios";
import './Api.css';



export default function Api() {

    const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);


  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;

 
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");


  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
        setFilteredCountries(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

 
  useEffect(() => {
    const filterCountries = () => {
      let filtered = countries;

      if (searchTerm) {
        filtered = filtered.filter((country) =>
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (region) {
        filtered = filtered.filter((country) => country.region === region);
      }

      setFilteredCountries(filtered);
      setCurrentPage(1); // Reset to the first page after filtering
    };

    filterCountries();
  }, [searchTerm, region, countries]);

  
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const handleNext = () => {
    if (currentPage < Math.ceil(filteredCountries.length / countriesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  return (
    <div className="bod">
      <div className="appp">
      <header className="header">
        <h1 className="h15"> 🌍 GlobeTrek</h1>
        
      </header>
      <div className="search">
       <input className="inputt"
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setRegion(e.target.value)} value={region} className="selectt">
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {loading ? (
        <p>Loading countries...</p>
      ) : (
        <div className="country-list">
          <div className="countries">
            {currentCountries.map((country) => (
              <div className="country-card" key={country.cca3}>
                <img src={country.flags.svg} alt={`${country.name.common} flag`} />
                <h2>{country.name.common}</h2>
                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
              </div>
            ))}
          </div>

          {/* Pagination controls */}
          <div className="pagination">
            <button onClick={handlePrevious} disabled={currentPage === 1} className="btn15">
              Previous
            </button>
            <span>
              Page {currentPage} of {Math.ceil(filteredCountries.length / countriesPerPage)}
            </span>
            <button
              onClick={handleNext} className="btn15"
              disabled={currentPage === Math.ceil(filteredCountries.length / countriesPerPage)}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}
