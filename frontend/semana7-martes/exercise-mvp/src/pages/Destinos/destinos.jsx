import { useEffect, useState } from "react"
import { Card } from "../../components/card/card";
import axios from "axios";

const destinoURL = "https://61ef3d44d593d20017dbb3a9.mockapi.io/Destinos";

export function PageDestinos(){
    const [destinosURL, setDestinos]= useState([]);

    useEffect(()=>{
      axios.get(destinoURL)
      .then((destino)=> setDestinos(destino.data)
      )
    },[]);
  
    return(
    <div className="page-destinos">
        <h1>Lista de Destinos Disponibles:</h1>
        <div className="card-main-content">
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
    </div>
    )
}


