import React from 'react'
import { useLocalStorage } from './useHooks/useLocalStore'

const App = () => {
const [theme , settheme] = useLocalStorage("theme", "light")

 const  handleToggele = ()=>{
   settheme(theme === "light"? "dark" : "light")
 }
 console.log(theme);
  return (
    <div>
      <p>Hi everyOne</p>
      <button onClick={handleToggele}>Click me Babey</button>
    </div>
  )
}

export default App
