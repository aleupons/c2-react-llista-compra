import PropTypes from "prop-types";
import { useCallback, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export const Articulo = (props) => {
  const { articulo, setAccion, toggleForm, borrarArticulo, setIdArticulo } =
    props;
  const { id, nombre, precio, comprado } = articulo;

  const getId = useCallback(() => {
    setIdArticulo(id);
  }, [id, setIdArticulo]);

  return (
    <>
      <li className="articulo">
        <input type="checkbox" className="marcar" />
        <span
          className="nombre"
          onClick={() => {
            setAccion("modificar");
            getId();
            toggleForm();
          }}
        >
          {nombre}
        </span>
        <span className="precio">{precio ? `${precio}€` : precio}</span>
        <i className="borrar">
          <FaTimes
            onClick={() => borrarArticulo(articulo)}
            style={{ cursor: "pointer" }}
          />
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
  setAccion: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};
