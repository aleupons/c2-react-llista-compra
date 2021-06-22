import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { AcercaDe } from "./paginas/AcercaDe";
import { Formulario } from "./paginas/Formulario";
import { Lista } from "./paginas/Lista";
import { Principal } from "./paginas/Principal";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/principal" exact>
          <Principal />
        </Route>
        <Route path="/acerca-de" exact>
          <AcercaDe />
        </Route>
        <Route path="/formulario" exact>
          <Formulario />
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
