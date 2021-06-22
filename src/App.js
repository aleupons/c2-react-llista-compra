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
  const urlAPI = "http://localhost:3001/articulos/";
  const [articulos, setArticulos] = useState([]);

  const listaCompraAPI = async () => {
    const response = await fetch(urlAPI);
    if (!response.ok) {
      return;
    }
    const datos = await response.json();
    if (datos) {
      setArticulos(datos);
    }
  };
  useEffect(() => {
    listaCompraAPI();
  }, []);

  const nuevoArticulo = async (articulo) => {
    const articuloCreado = await fetch(urlAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articulo),
    });
    setArticulos([...articulos, articuloCreado]);
  };

  const borrarArticulo = async (articuloABorrar) => {
    const response = await fetch(urlAPI + articuloABorrar.id, {
      method: "DELETE",
    });
    if (!response.ok) {
      return;
    } else {
      setArticulos(
        articulos.filter((articulo) => articuloABorrar.id !== articulo.id)
      );
    }
  };

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
          <Lista
            articulos={articulos}
            nuevoArticulo={nuevoArticulo}
            setArticulos={setArticulos}
            borrarArticulo={borrarArticulo}
          />
        </Route>
        <Route path="/" exact>
          <Redirect to="/principal" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
