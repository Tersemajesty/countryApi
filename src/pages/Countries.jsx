import '../styles/countries.css';
import CountryCard from '../components/countryCard/CountryCard';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Countries = ({handleModeSwitch, modeSwitch, loadState}) => {

    const url = 'https://restcountries.com/v3.1/all';
    const [countriesData, setCountriesData] = useState([]);
    console.log(countriesData)
    const [searchValue, setSearchValue] = useState('');
    const [filteredData,setFilteredData] = useState(countriesData || [])
    
    
    useEffect(() => {
      
    const fetchApi = async () => {
      try {
        loadState(true)
        const ress = await axios.get(url);
        setCountriesData(ress.data)
        setFilteredData(ress.data)
        console.log(ress);
      } catch (err) {
        console.log(err);
        loadState(false)
      }
    }
      fetchApi()
    }, [loadState])

    console.log(filteredData,setFilteredData)
    useEffect(()=>{
        setFilteredData(countriesData.filter((country) => {
            return country.name.common.toLowerCase().includes(searchValue.toLowerCase())
        }))
    },[searchValue])

    return (
        <div className={`countriesWrapper ${modeSwitch ? 'countriesWrapperDark' : ''}`}>
            <div className="countriesWrapperHeader">
                <div className="searchWrapper">
                    <CiSearch size={23} />
                    <input 
                        type="text" 
                        placeholder='Search...'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        />
                </div>
                <div className="dropDown">
                    <p>Filter by region</p>
                    <IoIosArrowDown  />
                </div>
            </div>

            <div className={`countriesCardWrapper ${modeSwitch ? 'countriesCardWrapperDark' : ''}`}>
                        <CountryCard handleModeSwitch = {handleModeSwitch} modeSwitch = {modeSwitch} filteredData={filteredData}/>
            </div>
        </div>
    );
}

export default Countries;
