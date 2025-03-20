import '../styles/countries.css';
import CountryCard from '../components/countryCard/CountryCard';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Countries = ({ handleModeSwitch, modeSwitch, loadState }) => {
    const url = 'https://restcountries.com/v3.1/all';
    const [countriesData, setCountriesData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                loadState(true);
                const ress = await axios.get(url);
                setCountriesData(ress.data);
                setFilteredData(ress.data);
                loadState(false);
            } catch (err) {
                console.error("Error fetching countries:", err);
                loadState(false);
            }
        };
        fetchApi();
    }, [loadState]);

    useEffect(() => {
        let filtered = countriesData;

        if (searchValue) {
            filtered = filtered.filter((country) =>
                country.name.common.toLowerCase().includes(searchValue.toLowerCase())
            );
        }

        if (selectedRegion) {
            filtered = filtered.filter((country) =>
                country.region.toLowerCase() === selectedRegion.toLowerCase()
            );
        }

        setFilteredData(filtered);
    }, [searchValue, selectedRegion, countriesData]);

    return (
        <div className={`countriesWrapper ${modeSwitch ? 'countriesWrapperDark' : ''}`}>
            <div className="countriesWrapperHeader">
                <div className="searchWrapper">
                    <CiSearch size={23} />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={searchValue} 
                        onChange={(e) => setSearchValue(e.target.value)} 
                    />
                </div>  
                
                <div className="dropDown">
                    <select onChange={(e) => setSelectedRegion(e.target.value)} value={selectedRegion}>
                        <option value="">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="North America">North America</option>
                        <option value="Oceania">Oceania</option>
                        <option value="South America">South America</option>
                    </select>
                    {/* <IoIosArrowDown size={20} /> */}
                </div>
            </div>

            <div className={`countriesCardWrapper ${modeSwitch ? 'countriesCardWrapperDark' : ''}`}>
                <CountryCard handleModeSwitch={handleModeSwitch} modeSwitch={modeSwitch} filteredData={filteredData} />
            </div>
        </div>
    );
};

export default Countries;
