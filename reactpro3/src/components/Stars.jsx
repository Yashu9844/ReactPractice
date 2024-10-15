import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const Stars = ({nofs}) => {
const [rate , setRated] = useState(0)
const [hover, setHovering] = useState(0)
const handleClick = (i)=>{
    setRated(i)
    console.log(rate)
 
}

const handleHover = (i)=>{
   setHovering(i)
   console.log(hover)
 
}
const handleMouseLeave = ()=>{
    setHovering(rate)
}




  return (
    <div>
      {
         [...Array(Number(nofs))].map((_,i)=>{
            // i+=1;
            return(  <FaStar
                key={i}
                onClick={()=>handleClick(i)}
                onMouseMove={()=>handleHover(i)}
                onMouseLeave={handleMouseLeave}
                color={i <= (hover || rate) ? "yellow" : "gray"}
                />)
             
                
                  
                
             
         })

      }
    </div>
  )
}

export default Stars
