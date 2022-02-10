import { Redirect } from "react-router"

export function PageNosotros({authorized}){
    
    if (!authorized){
        return <Redirect to="/login"></Redirect>
    }
    
    return(
    <div className="page-nosotros">
        Page Nosotros
    </div>
    )
}