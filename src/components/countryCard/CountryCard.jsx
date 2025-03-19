import { useEffect, useState } from 'react';
import './countryCard.css'
import axios from 'axios';

const CountryCard = ({ modeSwitch, loadState }) => {

  const url = 'https://restcountries.com/v3.1/all';
  const [countriesData, setCountriesData] = useState([]);
  console.log(countriesData)


  useEffect(() => {
    
  const fetchApi = async () => {
    try {
      loadState(true)
      const ress = await axios.get(url);
      setCountriesData(ress.data)
      console.log(ress);
    } catch (err) {
      console.log(err);
      loadState(false)
    }
  }
    fetchApi()
  }, [loadState])
  return <>
    {
      countriesData.map((Datas, index) => (
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

export default CountryCard