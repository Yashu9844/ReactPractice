import React, { useEffect, useState } from 'react'

const App = () => {
  const [loading,setLoading] = useState(false)
  const [products,setProducts] = useState([])
  const [percentage,setPercentage] = useState(0)

 const handleScroll = () =>{
  const howMuchScroll = document.body.scrollTop || document.documentElement.scrollTop

  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

  const scrollPercentage = (howMuchScroll / height) * 100
  console.log(scrollPercentage)

  setPercentage(scrollPercentage)
 }

  useEffect(()=>{
  window.addEventListener('scroll',handleScroll)


  return ()=>{  
    window.removeEventListener('scroll', handleScroll)
  }
  })



useEffect(()=>{
  const handleApi =async ()=>{
     setLoading(true)
         try {
          const res =await  fetch('https://dummyjson.com/products')
          const data = await res.json()
          console.log(data)
          setProducts(data.products)

         } catch (error) {
          console.log(error)
         }
  }
  handleApi()
  setLoading(false)
},[])

  return (
    <div className=''>
  <div className=" " style={{
    position:"fixed",
    top: '0',
    left: '0',
    width: '100%',
    backgroundColor: '#f1f1f1',
    zIndex: '999',
  }}>
  <div className="" style={{
      padding: '15px',
      height: '50px',
      width:"100%",
      backgroundColor:'orange'
     }} >
       


     </div>
     <div style={{
      height:'5px',
      width:`${percentage}%`,
      backgroundColor:'red'
     }}></div>
  </div>

      {products && products.map((p)=>(
        <div className=" " style={{
          textAlign: 'center',
          padding: '10px',
        }}  key={p.id}>{p.title}</div>
      ))}
    </div>
  )
}

export default App
