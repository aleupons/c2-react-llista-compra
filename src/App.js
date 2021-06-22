import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { AcercaDe } from "./paginas/AcercaDe";
import { Lista } from "./paginas/Lista";
import { Principal } from "./paginas/Principal";
import { Header } from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/principal" exact>
          <Principal />
        </Route>
        <Route path="/acerca-de" exact>
          <AcercaDe />
        </Route>
        <Route path="/lista" exact>
          <Lista />
        </Route>
        <Route path="/" exact>
          <Redirect to="/principal" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
