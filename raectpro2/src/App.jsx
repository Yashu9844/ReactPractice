import React, { useEffect, useState } from 'react'

const App = () => {

 const [color , setColor] = useState('green')
 const [type , setType] = useState('hex')


const randomColoUtility = (length)=>{
  return Math.floor(Math.random() * length)
}

 const handleChangeToRGB = ()=>{
  
  const red = randomColoUtility(256)
  const green = randomColoUtility(256)
  const blue = randomColoUtility(256)

  setColor(`rgb(${red},${green},${blue})`)
 console.log(color)
 }

const handleChangeToHex = ()=>{
 
  const array = ['0', '1', '2', '3', '4', '5','6','7','8','9','A', 'B', 'C', 'D', 'E', 'F']
  let yooyo = "#"
  for(let i=0; i<6; i++){
     yooyo += array[randomColoUtility(array.length)]
  }

  setColor(yooyo)

}

useEffect(()=>{
  if(type === 'rgb') {
    handleChangeToRGB() 
  }else handleChangeToHex()
},[type])


const createRandomColor = ()=>{}
  return (
    <div style={{
         width:'100%',
         height: '100vh',
         backgroundColor: color,
        
    }}>
      <div className="" style={{
        width: '100%',
      
        display: 'flex',
        justifyContent: 'center',
        
      
       
      }}>
        <button onClick={()=>setType('hex')} >Change to HEx A color</button>
        <button onClick={()=>setType('rgb')} >Change to RGB</button>
        <button onClick={
         type === 'rgb' ? (handleChangeToRGB):(handleChangeToHex)

        }>Create Random Color</button>
      </div>

      <div className=""style={{
        height:"50%",
        width:"100%",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'2rem',
        flexDirection:'column',
        gap:'4',
        
      }} >
<h1>{type}</h1>
 <h1>{color}</h1>
      </div>

    </div>
  )
}

export default App
