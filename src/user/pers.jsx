import './pers.css'
import { useEffect, useState } from 'react'
export default function Prsn (){
    const[img,setImg]=useState()
    const[nome,setNome]=useState()
    const[cognome,setCognome]=useState()
    const[cell,setCell]=useState()
    const[id,setId]=useState()
    const[email,setEmail]=useState()
    const[regi,setRegi]=useState()




    useEffect(() => {
        fetch('https://randomuser.me/api/') 
         
            .then((response) => response.json()) 
    
            .then((data) => { 
                console.log(data)
                console.log(data.results[0].picture.medium)
                setImg(data.results[0].picture.medium)
                setNome(data.results[0].name.first)
                setCognome(data.results[0].name.last)
                setCell(data.results[0].cell)
                setId(data.results[0].id.name)
                setEmail(data.results[0].email)
                let dateReg=data.results[0].registered.date;
                console.log(dateReg.toLocaleString())
                setRegi(dateReg)
           

           



                
                
              

            })
    
            .catch((error) => { 
                console.error(error);
            })
    
            .finally(() => { 
    
            })
    }, []);
    return(
        <div>
            <div>
                <div>
                    <img className='img' src ={img}/>
                </div>
                <div className='name'>
                    <div> <h2>{nome}</h2></div>
                    <div> <h2>{cognome}</h2></div>
                </div>
            </div>
            <div>
                <div><h3>id Username:  {id}</h3></div>
                <div><h3> Email:       {email}</h3> </div>
                <div><h3>Cellulare{cell}</h3></div>
                <div className='name'><h4>Registratto il {regi}</h4></div>
                <div></div>

            </div>

        </div>
    )
}