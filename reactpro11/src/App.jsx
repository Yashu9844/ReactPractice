import { Button } from '@headlessui/react'
import React from 'react'
import { useState } from 'react'
import GitModal from './GitModal'
import { useEffect } from 'react'

const App = () => {
    
  const [text, setText] = React.useState('')
console.log(text)
const [username , setUserName]= useState('Yashu9844')
const [data , setData] = useState(null)
const handleSubmit = (e) => {
  e.preventDefault()
  setUserName(text)
  setText('')
}

 useEffect(()=>{

const handleApi =async ()=>{
  const res =  await fetch(`https://api.github.com/users/${username}`);

  const data = await res.json();
 
  setData(data)
}
 handleApi()
 },[username])


  return (
    <div className='h-screen  bg-gray-200 w-full'>
      <div className="flex justify-center items-center h-20 bg-transparent">
        <input type="text" className='p-2  border border-red-500  rounded' placeholder='Enter  the username...' value={text} onChange={(e)=>setText(e.target.value)} />
        <button type='submit' onClick={handleSubmit} className='bg-blue-500 p-2 ml-2 rounded text-white'>Submit</button>
      </div>
    
      <div className=" h-[90%]  flex justify-center items-center">
        <GitModal user={username ? username : "Yashu9844"} data ={data}/>
      </div>

      
    </div>
  )
}

export default App
