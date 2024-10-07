import React, { useState } from 'react'
import data from './components/data'

const App = () => {

const [select , setSelection] = useState(null)
   

  return (
    <div className='max-h-screen w-full relative  '>
      <div className="flex flex-col justify-center items-center mt-[10%] w-[30%]  mx-auto " >
        {
          data && data.length > 0 ? (
           
        data.map((dataItem)=>(
          <div className="w-full " key={dataItem.id}>
            <div className="bg-red-600 mt-5 p-3 rounded-xl   " onClick={()=>setSelection(dataItem.id && select === dataItem.id ? null : dataItem.id )} >
              {dataItem.question}    <span className='bloack text-2xl'>+</span>
            </div>
            <div className="p-2">
              {dataItem.id === select ? (
                  <div className="text-xl font-normal ">
                    {dataItem.answer}
                  </div>

              ) : null         }

            </div>
          </div>
        ))

          ) : (
            <div>
            not data is empty
            
            </div>

          )

        }
      </div>
    </div>
  )
}

export default App
