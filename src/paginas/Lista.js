import { useState } from "react";
import { FaPlusCircle, FaTimesCircle } from "react-icons/fa";
import { Articulo } from "../components/Articulo";
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
      {formulario && <Formulario modificar={false} />}
      {!formulario && (
        <main className="principal espaciado">
          <ul className="articulos">
            <Articulo formulario={formulario} toggleForm={toggleForm} />
          </ul>
          <span className="precio-total">1.95€</span>
        </main>
      )}
    </>
  );
};
