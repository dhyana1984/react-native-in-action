import React from 'react'
import DarkLightMode from './src/DarkLightMode'
import ProfileCard from './src/ProfileCard'
import CitiesApp from './src/CitiesApp'

console.disableYellowBox = true 
const App: () => React$Node = () => {
  
  return (
    // <DarkLightMode />
    // <ProfileCard />
      <CitiesApp />
  )
}

export default App;
