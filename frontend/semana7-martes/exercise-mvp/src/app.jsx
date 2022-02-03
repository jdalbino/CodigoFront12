import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Route,Redirect, Switch, BrowserRouter as Router } from "react-router-dom";
import { PageNosotros } from "./pages/Nosotros/nosotros";
import { PageDestinos } from "./pages/Destinos/destinos";
import { PageContactanos } from "./pages/Contactanos/contactanos";
import "./assets/style/main.scss";
//app
export function App() {
  return (
    <Router>
    <div className="wrapper">
      <Header></Header>
      <Main>
          <Switch>
            <Route path="/Nosotros">
              <PageNosotros></PageNosotros>
            </Route>
            <Route path="/Destinos">
              <PageDestinos></PageDestinos>
            </Route>
            <Route path="/Contactanos">
              <PageContactanos></PageContactanos>
            </Route>
            <Redirect exact from="/" to="/Nosotros"></Redirect>
          </Switch>
      </Main>
      <Footer></Footer>
    </div>
    </Router>
  );
}
