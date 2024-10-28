import './card.css'

export default function Card ({title,main_Info,icon,description}){
    return(
    
      <div className="card">
          <div>
                <div className="title">
                     <h3>{title} </h3>
                </div>
                <div className="icon"> 
                    {icon}
                </div>
          </div>
          <div>
             <h2>{main_Info} </h2>
          </div>
          <div className="description">
            <p>{description} </p>
          </div>
            
        </div>
    )
}
//display: flex;