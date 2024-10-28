import './App.css'
import Compoment from './compoment'
import Card from './componenti/card'
import Crypto from './componenti/crypt'
import Counter from './counter/count'
import Game from './morra/gioco'
import Bitcoin from './bitcoin/bitcoin'
import Univ from './universita/uni'
import Prsn from './user/pers'
function App(){
  const Api= [
    {
      "id":0,
      "title": "Titolo 1",
      "icon":"",
      "mainInfo":"",
      "description":"descrizione",
    },
    {
      "id":1,
      "title":"titolo 2",
      "icon":"",
      "mainInfo":"",
      "description":"descrizione",
    },
    {
      "id":2,
      "title":"titolo 3",
      "icon":"",
      "mainInfo":"",
      "description":"descrizione",
    },
    {
      "id":3,
      "title":"titolo 4",
      "icon":"",
      "mainInfo":"",
      "description":"descrizione",
    }
  ]
  return(
    <>
   {/*
    <div className='flex'>
      { Api.map((el)=>(
      <Card 
      id={el.id}
     
      title={el.title}
      icon={el.icon}
      mainInfo={el.mainInfo}
      description={el.description}
      />
     ))}
      </div>
      <div className='flex'>
         
          <Counter/>
          <Crypto/>
      </div>
      <div>
        <Game/>
      </div>
     */}
      <Prsn/>
     
       
       
    
    </>
  )
}
export default App 