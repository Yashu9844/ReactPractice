import React from 'react'
import Slider from './components/Slider'
const App = () => {
  return (
    <div>
      <Slider  
      link={'https://picsum.photos/v2/list'} page={"1"}
      limit={"20"}/>
      
    </div>
  )
}

export default App

