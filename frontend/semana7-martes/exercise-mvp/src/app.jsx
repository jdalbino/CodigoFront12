import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
//app
export function App() {
    return (
      <div className="wrapper">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }