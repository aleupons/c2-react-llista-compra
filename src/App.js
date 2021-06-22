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
import { useEffect, useState } from "react";

function App() {
  const urlAPI = "http://localhost:3001/articulos";
  const [articulos, setArticulos] = useState([]);

  const listaCompraAPI = async () => {
    const response = await fetch(urlAPI);
    const datos = await response.json();
    setArticulos(datos);
  };
  useEffect(() => {
    listaCompraAPI();
  }, []);

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
          <Lista articulos={articulos} />
        </Route>
        <Route path="/" exact>
          <Redirect to="/principal" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
