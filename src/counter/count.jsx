import {useEffect, useState} from 'react'
import './count.css'

 
export default function Counter() {
  const [count, setCount]= useState(0)
  const [showPoppup, setShowPoppup]= useState(0)

  const add=()=>{
    setCount(count +1)
  }
   const min=()=>{
    setCount(count -1)
   }
    const reset=()=>{
    setCount(0)
  }
  useEffect(()=>{
    if (count<0){
        setCount(0)
        setShowPoppup(true)
    }
    if (count>0){
        setShowPoppup(false)
    }
 
  }, [count])
    return (
        <div className="counter">
            <h1>{count}</h1>
           
            <div className="btns">
                <button onClick={()=>add()}>+</button>
                <button onClick={()=>min()}>-</button>
                <button onClick={()=>reset()}>Reset</button>
            </div>
            { showPoppup && (
                <div>
                    <h3> Errore</h3>
                </div>
            )
                
            }
           
        </div>
       
    )
 
}