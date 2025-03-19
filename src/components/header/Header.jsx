import './header.css'
import { IoMoonSharp } from "react-icons/io5";

const Header = ({handleModeSwitch, modeSwitch}) => {


    return (
        <>
        <div className={`headerWrapper ${modeSwitch ? 'headerWrapperDark' : ''}`}>
            <div className='headerContent'>
            <h1 className="headerText">Where in the world?</h1>
            <div className="darkModeWrapper" onClick={handleModeSwitch}>
            <IoMoonSharp size={20}/> <p>Dark Mode</p>
            </div>
            </div>
        </div>
        <div className='headerWrapperunder'></div>
        </>
    )
}

export default Header