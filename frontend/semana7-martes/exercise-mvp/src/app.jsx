import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Route,Redirect, Switch, BrowserRouter as Router } from "react-router-dom";
import { PageNosotros } from "./pages/Nosotros/nosotros";
import { PageDestinos } from "./pages/Destinos/destinos";
import { PageContactanos } from "./pages/Contactanos/contactanos";
import { PageLogin } from "./pages/login/login";
import "./assets/style/main.scss";
import { useState } from "react";

//app
export function App() {

  const [autorizado,setAutorizado] = useState(false);

  return (
    <Router>
      <Switch>
    <div className="wrapper">
      <Header></Header>
      <Main>
            <Route path="/Login">
              <PageLogin setAutorizado={setAutorizado}></PageLogin>
            </Route>
             <Route exact path="/Nosotros">
              <PageNosotros authorized={autorizado}></PageNosotros>
            </Route>
            <Route path="/Destinos">
              <PageDestinos authorized={autorizado}></PageDestinos>
            </Route>
            <Route path="/Contactanos">
              <PageContactanos authorized={autorizado}></PageContactanos>
            </Route>
            <Redirect exact from="/" to="/Login"></Redirect>
      </Main>
      <Footer></Footer>
    </div>
    </Switch>
    </Router>
  );
}
