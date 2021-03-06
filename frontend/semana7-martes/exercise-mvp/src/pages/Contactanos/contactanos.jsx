import { Redirect } from "react-router"

export function PageContactanos({authorized}){

    if (!authorized) {
        return <Redirect to="login"></Redirect>
    }

    return(
    <div className="page-contactanos">
        <form action="">
            <h3>Quieres Mantenerte al tanto de nuestras actualizaciones?</h3>
            <div className="inputs">
                <input type="text" placeholder="Name"/>
                <input type="phone" placeholder="Phone"/>
                <input type="email" placeholder="Email"/>
                <button type="submit">submit</button>
            </div>
        </form>
        
    </div>
    )
}