import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

export const Articulo = (props) => {
  const {
    articulo: { id, nombre, precio, comprado },
    setModificar,
    toggleForm,
  } = props;
  return (
    <>
      <li className="articulo">
        <input type="checkbox" className="marcar" />
        <span
          className="nombre"
          onClick={() => {
            setModificar(true);
            toggleForm();
          }}
        >
          {nombre}
        </span>
        <span className="precio">{precio ? `${precio}€` : precio}</span>
        <i className="borrar">
          <FaTimes />
        </i>
      </li>
    </>
  );
};

Articulo.propTypes = {
  articulo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number,
    comprado: PropTypes.bool.isRequired,
  }), //Potser no hi ha cap article
  setModificar: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};
