import {useEffect, useState} from 'react'
import './gioco.css'

 
export default function Game() {
  const [count, setCount]= useState(0)
  const [valore, setValore]= useState("")
  const [risultato, setRisultato]= useState("")
  const [scelta, setScelta]= useState("")


  let ia;
  let nu;
     
  const veri=()=>{
    setScelta("Sasso")
    nu=Math.floor(Math.random() * 3) + 1;
    if(1==nu){
        ia="Sasso"
       
      }else if(2==nu){
          ia="Carta"
         
      }else {
        ia="Forbici"
        
      }
    setValore(ia)
    console.log(nu)
    if(1==nu){
        setCount(count +1)
        setRisultato("pareggio")
        console.log("Pareggio")
    
    }else if(3==nu){
        console.log("hai vinto")
        setRisultato("Hai vinto")
    }else{
        console.log("hai perso")
        setRisultato("Hai perso")

    }
    
  }

   const verifi=()=>{
    setScelta("Carta")

    nu=Math.floor(Math.random() * 3) + 1;
    if(1==nu){
        ia="Sasso"
       
      }else if(2==nu){
          ia="Carta"
         
      }else {
        ia="Forbici"
        
      }
    setValore(ia)
    setCount(count +1)
   
    console.log(nu)
    if(2==nu){
        console.log("pareggio")
        setRisultato("Pareggio")
    }else if(1==nu){
        console.log("hai vinto")
        setRisultato("Hai vinto")

    }else{
        console.log("hai perso")
        setRisultato("Hai perso")

    }
   }
    const verifica=()=>{
    setScelta("Forbici")

        nu=Math.floor(Math.random() * 3) + 1;
        if(1==nu){
            ia="Sasso"
           
          }else if(2==nu){
              ia="Carta"
             
          }else {
            ia="Forbici"
            
          }
        setValore(ia)
            console.log(nu)
            if(3==nu){
                setCount(count +1)
                console.log("pareggio")
                setRisultato("Pareggio")
            }else if(2==nu){
                console.log("hai vinto")
                setRisultato("Hai vinto")

            }else{
                console.log("hai perso")
                setRisultato("Hai perso")

            }
    } 
    
        
  
    return (
       <div className='flex'>
         <div>
                <div className="btn" onClick={()=>veri()}>Sasso</div>
                <div className="btn" onClick={()=>verifi()}>Carta</div>
                <div className="btn" onClick={()=>verifica()}>Forbice</div>
            </div>
         <div className='flex'>
                <div className='btn'> 
                    {scelta}
                     </div>
                <p> VS</p>
                <div className='btn'> 
                    {valore}
                    </div>
                <div className='btn'>{risultato}</div>
         </div>
         
       </div>
    )
 
}