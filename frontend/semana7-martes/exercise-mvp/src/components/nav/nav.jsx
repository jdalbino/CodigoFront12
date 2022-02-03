import { Link } from "react-router-dom";

export function Nav(){
    return(
    <ul className="nav">
        <li><Link to="/Nosotros">Nosotros</Link></li>
        <li><Link to="/Destinos">Destinos</Link></li>
        <li><Link to="/Contactanos">Contactanos</Link></li>
    </ul>
    )
}