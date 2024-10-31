import { useEffect, useState } from "react"

export const useLocalStorage = (Key ,DefauktValue )=>{
    const [value , setValue] = useState(()=>{
      let currentValue;

      try {
        currentValue = JSON.parse(localStorage.getItem(Key))
      } catch (e) {
        console.error("error occured while parsing")
        currentValue = DefauktValue
      }
      return currentValue
    })

    useEffect(()=>{
        localStorage.setItem(Key,JSON.stringify(value))
    },[Key,value])
0
    return [value, setValue]
}