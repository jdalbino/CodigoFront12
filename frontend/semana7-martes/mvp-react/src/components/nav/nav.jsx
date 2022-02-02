import {Link } from "react-router-dom"
export //Nav
function Nav(){
  return (
    <ul className="nav">
    <li><Link to="/sobre-mi">Sobre Mi</Link></li>
    <li><Link to="/portafolio">Portafolio</Link></li>
    <li><a>Experiencia</a></li>
    <li><a>Sobre Mi</a></li>
  </ul>
  )
}