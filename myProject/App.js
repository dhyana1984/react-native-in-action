import React from 'react'
import DarkLightMode from './src/DarkLightMode'
import ProfileCard from './src/ProfileCard'
import CitiesApp from './src/CitiesApp'
import FocusAndScaled from './src/Animation/FocusAndScaled'
import Loading from './src/Animation/Loading'
import Paralle from './src/Animation/Parallel'
import Squence from './src/Animation/Squence'
import Stagger from './src/Animation/Stagger'
import Books from './src/BooksApp'

console.disableYellowBox = true
const App: () => React$Node = () => {

  return (
    // <DarkLightMode />
    // <ProfileCard />
    // <CitiesApp />
    // <FocusAndScaled />
    // <Loading />
    // <Paralle />
    // <Squence />
    // <Stagger />
    <Books />
  )
}

export default App;
