import React, { useEffect, useState } from 'react'
import Countries from './pages/Countries'
import Header from './components/header/Header'

 const App = () => {
  const [modeSwitch, setModeSwitch] = useState(false)

  const handleModeSwitch = () => {
      setModeSwitch(!modeSwitch)
  }

  const [loadState, setLoadState] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoadState(false)
    }, 5000)
  })

  return (
   <>
    {
    loadState? <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', backdropFilter: "blur(10px)"}}><span class="loader"></span></div> : <div>
      <Header handleModeSwitch = {handleModeSwitch} modeSwitch = {modeSwitch}/>
      <Countries handleModeSwitch = {handleModeSwitch} modeSwitch = {modeSwitch} loadState={setLoadState}/>
    </div>
    }
   </>
  )
}

export default App