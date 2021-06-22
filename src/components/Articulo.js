import { FaTimes } from "react-icons/fa";
import { Formulario } from "./Formulario";

export const Articulo = (props) => {
  const { formulario, toggleForm } = props;
  return (
    <>
      {formulario && <Formulario modificar={true} />}
      {!formulario && (
        <li className="articulo">
          <input type="checkbox" className="marcar" />
          <span className="nombre" onClick={toggleForm}>
            Pan
          </span>
          <span className="precio">0.75€</span>
          <i className="borrar">
            <FaTimes />
          </i>
        </li>
      )}
    </>
  );
};
