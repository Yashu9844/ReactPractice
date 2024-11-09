import { useState } from "react"
import {QRCode} from 'react-qr-code'
const App =()=>{
const [input , setInput] = useState('')
const [genrate , setGEnrate] = useState('')

const handleButton = ()=>{
  setGEnrate(input)
  setInput('')
}

  return (
    <div className="" style={{
      display:'flex',
      flexDirection:'column',
      width:'50%',
      gap:10,
    }}>
      <input type="text" placeholder="Enter the qr code you wanted" name='qr-code' value={input} 
      onChange={(e)=>setInput(e.target.value)}
      />
      <button onClick={handleButton}>SubmiT</button>

      <QRCode value={genrate} size={400} bgColor="#fff" id="qr-codee" />




    </div>
  )
}


export default App