import { useEffect, useState } from "react";
import './bitcoin.css'
export default function Bitcoin(){
    const [usd, setUsd]= useState("")
    const [eur, setEur]= useState("")
    const [gpi, setGpi]= useState("")

useEffect(() => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json') // Fetch dell'api

        .then((response) => response.json()) // Gestisco la risposta

        .then((data) => { // Ritorno i dati
            
            
            console.log(data)
            console.log(data.bpi.EUR.rate)
        })

        .catch((error) => { // Gestisco eventuali errori
            console.error(error);
        })

        .finally(() => { // Eseguo azioni alla fine di tutto

        })
}, []);
return(
    <div></div>
);
}