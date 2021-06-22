import { useState } from "react";
import { FaPlusCircle, FaTimesCircle, FaTimes } from "react-icons/fa";
import { Formulario } from "../components/Formulario";

export const Lista = () => {
  const [formulario, setFormulario] = useState(false);
  const toggleForm = () => {
    setFormulario(!formulario);
  };
  return (
    <>
      <section className="info espaciado bloque-superior">
        <i className="icono" onClick={toggleForm}>
          {formulario ? <FaTimesCircle /> : <FaPlusCircle />}
        </i>
        <p className="n-articulos">2/3 comprados</p>
      </section>
      {formulario && <Formulario />}
      {!formulario && (
        <main className="principal espaciado">
          <ul className="articulos">
            <li className="articulo">
              <input type="checkbox" className="marcar" />
              <span className="nombre">Pan</span>
              <span className="precio">0.75€</span>
              <i className="borrar">
                <FaTimes />
              </i>
            </li>
            <li className="articulo">
              <input type="checkbox" className="marcar" />
              <span className="nombre">Azúcar</span>
              <i className="borrar">
                <FaTimes />
              </i>
            </li>
            <li className="articulo">
              <input type="checkbox" className="marcar" />
              <span className="nombre">Leche</span>
              <span className="precio">1.20€</span>
              <i className="borrar">
                <FaTimes />
              </i>
            </li>
          </ul>
          <span className="precio-total">1.95€</span>
        </main>
      )}
    </>
  );
};
