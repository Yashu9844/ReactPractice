import React from 'react'
import { useState } from 'react'
import Stars from './components/Stars'

const App = () => {
  const [nofs,setStars] = useState('')
  const [hello , setHello] = useState(0)
  console.log(nofs)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(nofs)
    setHello(nofs)
  }

  return (
   
    <div>
    <form action="" onSubmit={handleSubmit}  >
      <input type="text" value={nofs} onChange={(e)=>setStars(e.target.value)} />
      <button type="submit"  >Generate</button>
    </form>

    <Stars nofs={hello}/>
    </div>
  )
}

export default App
