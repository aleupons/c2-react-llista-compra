import PropTypes from "prop-types";
import { useState } from "react";
import { FaPlusCircle, FaTimesCircle } from "react-icons/fa";
import { Articulo } from "../components/Articulo";
import { Formulario } from "../components/Formulario";

export const Lista = (props) => {
  const { articulos, nuevoArticulo, borrarArticulo, modificarArticulo } = props;

  const [formulario, setFormulario] = useState(false);
  const [accion, setAccion] = useState("");
  const toggleForm = () => {
    setFormulario(!formulario);
  };
  const precioTotal = articulos.reduce(
    (acumulador, articulo) => articulo.precio + acumulador,
    0
  );
  const [idArticulo, setIdArticulo] = useState(null);
  return (
    <>
      <section className="info espaciado bloque-superior">
        <i
          className="icono"
          onClick={() => {
            setAccion("anyadir");
            toggleForm();
          }}
        >
          {formulario ? <FaTimesCircle /> : <FaPlusCircle />}
        </i>
        <p className="n-articulos">2/3 comprados</p>
      </section>
      {formulario && (
        <Formulario
          accion={accion}
          articulos={articulos}
          idArticulo={idArticulo}
          setFormulario={setFormulario}
          nuevoArticulo={nuevoArticulo}
          modificarArticulo={modificarArticulo}
        />
      )}
      {!formulario && (
        <main className="principal espaciado">
          <ul className="articulos">
            {articulos.map((articulo) => (
              <Articulo
                key={articulo.id}
                articulo={articulo}
                setAccion={setAccion}
                toggleForm={toggleForm}
                borrarArticulo={borrarArticulo}
                setIdArticulo={setIdArticulo}
              />
            ))}
          </ul>
          <span className="precio-total">
            {precioTotal ? `${precioTotal}€` : precioTotal}
          </span>
        </main>
      )}
    </>
  );
};

Lista.propTypes = {
  articulos: PropTypes.array.isRequired,
};
