import { useEffect, useState } from "react"
import { Card } from "../card/card"
import axios from "axios";

// const destinos = [
//   {
//       "imagen": "https://picsum.photos/200/300",
//       "titulo": "titulo 1",
//       "descripcion": "descripcion 1",
//       "costo": "costo 1",
//       "tiempo": "tiempo 1",
//       "id": "1"
//       },
//       {
//       "imagen": "https://picsum.photos/200/300",
//       "titulo": "titulo 2",
//       "descripcion": "descripcion 2",
//       "costo": "costo 2",
//       "tiempo": "tiempo 2",
//       "id": "2"
//       },
// ]
const destinoURL = "https://61ef3d44d593d20017dbb3a9.mockapi.io/Destinos";
//main
export function Main(){
  const [destinosURL, setDestinos]= useState([]);

  useEffect(()=>{
    axios.get(destinoURL)
    .then((destino)=> setDestinos(destino.data)
    )
  },[]);

    return (
      <div className="main">
        <h1>Lista de Destinos Disponibles:</h1>
        {destinosURL.map((destino)=>
        <Card
        imagen={destino.imagen}
        titulo={destino.titulo}
        descripcion={destino.descripcion}
        costo={destino.costo}
        tiempo={destino.tiempo}
        >
        </Card>
        )}
      </div>
    )
  }