import { Button } from '@headlessui/react'
import React from 'react'
import { useState } from 'react'
import GitModal from './GitModal'

const App = () => {
    
  const [text, setText] = React.useState('')
console.log(text)
const [username , setUserName]= useState('')

const handleSubmit = (e) => {
  e.preventDefault()
  setUserName(text)
  setText('')
}

  return (
    <div className='h-screen  bg-gray-200 w-full'>
      <div className="flex justify-center items-center h-20 bg-transparent">
        <input type="text" className='p-2  border border-red-500  rounded' placeholder='Enter  the username...' value={text} onChange={(e)=>setText(e.target.value)} />
        <button type='submit' onClick={handleSubmit} className='bg-blue-500 p-2 ml-2 rounded text-white'>Submit</button>
      </div>
    
      <div className=" h-[70%] bg-red-500 flex justify-center items-center">
        <GitModal user={username ? username : "Yashu9844"}/>
      </div>

      
    </div>
  )
}

export default App
