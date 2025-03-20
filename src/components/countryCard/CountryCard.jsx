// import { useEffect, useState } from 'react';
import './countryCard.css'
// import axios from 'axios';

const CountryCard = ({ modeSwitch, filteredData }) => {


  return <>
   {
    filteredData.length === 0 ? <h3>Country not found</h3> : 
    <>
     {
      filteredData.map((Datas, index) => (
        <div className={`countryCardWrapper ${modeSwitch ? "countryCardWrapperDark" : ""}`} key={index}>
          <img src={Datas.flags?.png} alt={Datas.name?.common} />
          <h2>{Datas.name?.common}</h2> {/* Country Name */}
        <p>Region: {Datas.region}</p> {/* Region */}
        <p>Capital: {Datas.capital?.[0]}</p> {/* Capital */}
        <p>Population: {Datas.population.toLocaleString()}</p> {/* Population */}
        </div>
      ))
    }
    </>
   }
  </>
}

export default CountryCard