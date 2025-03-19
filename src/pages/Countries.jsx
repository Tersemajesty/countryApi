import '../styles/countries.css';
import CountryCard from '../components/countryCard/CountryCard';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const Countries = ({handleModeSwitch, modeSwitch, loadState}) => {

    return (
        <div className={`countriesWrapper ${modeSwitch ? 'countriesWrapperDark' : ''}`}>
            <div className="countriesWrapperHeader">
                <div className="searchWrapper">
                    <CiSearch size={23} />
                    <input 
                        type="text" 
                        placeholder='Search...'/>
                </div>
                <div className="dropDown">
                    <p>Filter by region</p>
                    <IoIosArrowDown />
                </div>
            </div>

            <div className={`countriesCardWrapper ${modeSwitch ? 'countriesCardWrapperDark' : ''}`}>
                        <CountryCard handleModeSwitch = {handleModeSwitch} modeSwitch = {modeSwitch} loadState={loadState}/>
            </div>
        </div>
    );
}

export default Countries;
