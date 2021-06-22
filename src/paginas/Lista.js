import PropTypes from "prop-types";
import { useState } from "react";
import { FaPlusCircle, FaTimesCircle } from "react-icons/fa";
import { Articulo } from "../components/Articulo";
import { Formulario } from "../components/Formulario";

export const Lista = (props) => {
  const { articulos, borrarArticulo } = props;
  const [formulario, setFormulario] = useState(false);
  const [modificar, setModificar] = useState(false);
  const toggleForm = () => {
    setFormulario(!formulario);
  };
  return (
    <>
      <section className="info espaciado bloque-superior">
        <i
          className="icono"
          onClick={() => {
            setModificar(false);
            toggleForm();
          }}
        >
          {formulario ? <FaTimesCircle /> : <FaPlusCircle />}
        </i>
        <p className="n-articulos">2/3 comprados</p>
      </section>
      {formulario && <Formulario modificar={modificar} />}
      {!formulario && (
        <main className="principal espaciado">
          <ul className="articulos">
            {articulos.map((articulo) => (
              <Articulo
                key={articulo.id}
                articulo={articulo}
                setModificar={setModificar}
                toggleForm={toggleForm}
                borrarArticulo={borrarArticulo}
              />
            ))}
          </ul>
          <span className="precio-total">1.95€</span>
        </main>
      )}
    </>
  );
};

Lista.propTypes = {
  articulos: PropTypes.array.isRequired,
};
