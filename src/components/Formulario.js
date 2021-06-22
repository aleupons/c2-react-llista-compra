import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Formulario = (props) => {
  const {
    accion,
    articulos,
    idArticulo,
    setFormulario,
    nuevoArticulo,
    modificarArticulo,
  } = props;
  const idMasAlta = articulos.reduce((acumulador, articulo) => {
    if (articulo.id > acumulador) {
      acumulador = articulo.id;
      return articulo.id;
    } else {
      return acumulador;
    }
  }, 0);
  const [articulo, setArticulo] = useState({
    id: idMasAlta + 1,
    nombre: "",
    precio: "",
    comprado: false,
  });

  useEffect(() => {
    if (accion === "modificar") {
      setArticulo(
        articulos.find(
          (articuloAModificar) => articuloAModificar.id === idArticulo
        )
      );
    }
  }, [accion, articulos, idArticulo]);

  const submitArticulo = (e) => {
    e.preventDefault();
    if (accion === "anyadir") {
      console.log(articulo);
      nuevoArticulo(articulo);
      setFormulario(false);
    } else if (accion === "modificar") {
      console.log(articulo);
      modificarArticulo(articulo);
      setFormulario(false);
    }
  };

  return (
    <>
      <main className="principal espaciado">
        <h2 className="titulo-seccion">
          {accion === "modificar" ? "Modificar" : "Añadir"} artículo
        </h2>
        <form className="form-crear" noValidate onSubmit={submitArticulo}>
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
                setArticulo({ ...articulo, precio: +e.target.value })
              }
              // ref={elementoInput}
            />
            €
          </div>
          <button className="enviar" type="submit">
            {accion === "modificar" ? "Modificar" : "Añadir"}
          </button>
        </form>
      </main>
    </>
  );
};

Formulario.propTypes = {
  accion: PropTypes.string.isRequired,
};
