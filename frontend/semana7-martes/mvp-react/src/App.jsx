import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";
import { PageSobremi } from "./pages/sobre-mi/sobremi";
import { PagePortafolio } from "./pages/portafolio/portafolio";
import { PageExperiencia } from "./pages/experiencia/experiencia";
import { PageContacto } from "./pages/contacto/contacto";

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import {store} from "./store/store";
import { Provider } from "react-redux";

export //MAIN APP FUNCTION:
function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="Wrapper">
        <Header></Header>
        <Main>
          <Switch>
            <Route path="/sobre-mi">
              <PageSobremi></PageSobremi>
            </Route>
            <Route path="/portafolio">
              <PagePortafolio></PagePortafolio>
            </Route>
            <Route path="/experiencia">
              <PageExperiencia></PageExperiencia>
            </Route>
            <Route path="/contacto">
              <PageContacto></PageContacto>
            </Route>
            <Redirect exact from="/" to="/sobre-mi"></Redirect>
          </Switch>
        </Main>
        <Footer></Footer>
      </div>
    </Router>
    </Provider>
  );
}
