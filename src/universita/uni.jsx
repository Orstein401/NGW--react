import './uni.css'
import { useEffect, useState } from 'react'
export default function Univ (){
    const[lista,setLista]=useState([])

    useEffect(() => {
        fetch('http://universities.hipolabs.com/search?country=United+States') 
         
            .then((response) => response.json()) 
    
            .then((data) => { 
                console.log(data)
                setLista(data)
                
              

            })
    
            .catch((error) => { 
                console.error(error);
            })
    
            .finally(() => { 
    
            })
    }, []);
    return(
            <div>
                 <table className='tab'>
                     <thead>
                         <tr className='tab'>
                             <th>Nome</th>
                             <th>Code</th>
                             <th>Paese</th>
                             <th>Sito</th>
                         </tr>
                     </thead>
                     <tbody>
                        {lista.map((el)=>(
                            <tr >
                                 <td className='tab'>{el.name}</td>
                                 <td className='tab'>{el.alpha_two_code}</td>
                                 <td className='tab'>{el.country}</td>
                                 <td className='tab'><a href={el.web_pages[0]} target="_blank">{el.web_pages[0]}</a></td>
                             </tr>
                        ))}
                       
                     </tbody>
                 </table>
            </div>
         
      
        
    
    )
}

 