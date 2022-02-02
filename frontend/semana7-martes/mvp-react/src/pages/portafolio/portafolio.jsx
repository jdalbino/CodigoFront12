import axios from "axios";
import { useEffect, useState } from "react";
import { Card, UserCard } from "../../components/card/card";
const userURL = "https://61ef3d44d593d20017dbb3a9.mockapi.io/users";

export function PagePortafolio() {

const [datosPortafolio, setDatosPortafolio] = useState([]);

   useEffect(() => {
     axios.get(userURL).then((respuesta) => {
       setDatosPortafolio(respuesta.data);
     });
   },[]);


  return (
    <div className="page-portafolio">
    {
    datosPortafolio.map((user) => 
        <UserCard
          name={user.name}
          description={user.description}
        ></UserCard>
      )
      }
    </div>
  );
}
