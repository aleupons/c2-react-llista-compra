import { useState } from "react";
import { FaPlusCircle, FaTimesCircle } from "react-icons/fa";
import { Articulo } from "../components/Articulo";
import { Formulario } from "../components/Formulario";

export const Lista = () => {
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
            <Articulo setModificar={setModificar} toggleForm={toggleForm} />
          </ul>
          <span className="precio-total">1.95€</span>
        </main>
      )}
    </>
  );
};
