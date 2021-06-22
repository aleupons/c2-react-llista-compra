import PropTypes from "prop-types";
import { useState } from "react";

export const Formulario = (props) => {
  const { modificar, nuevoArticulo } = props;
  const [articulo, setArticulo] = useState("");

  const anyadirArticulo = (e) => {
    e.preventDefault();
    nuevoArticulo({ articulo });
  };

  return (
    <>
      <main className="principal espaciado">
        <h2 className="titulo-seccion">
          {modificar ? "Modificar" : "Añadir"} artículo
        </h2>
        <form className="form-crear" noValidate onSubmit={anyadirArticulo}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            className="control"
            type="text"
            id="nombre"
            value={articulo.nombre}
            onChange={(e) =>
              setArticulo({ ...articulo, nombre: e.target.value })
            }
            // ref={elementoInput}
          />
          <label htmlFor="precio">Precio:</label>
          <div className="control-moneda">
            <input
              className="control"
              type="number"
              id="precio"
              value={articulo.precio}
              onChange={(e) =>
                setArticulo({ ...articulo, precio: e.target.value })
              }
              // ref={elementoInput}
            />
            €
          </div>
          <button className="enviar" type="submit">
            {modificar ? "Modificar" : "Añadir"}
          </button>
        </form>
      </main>
    </>
  );
};

Formulario.propTypes = {
  modificar: PropTypes.bool.isRequired,
};
