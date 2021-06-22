export const Principal = () => {
  return (
    <>
      <header className="cabecera espaciado bloque-superior">
        <h1>Lista de la compra</h1>
        <nav>
          <ul className="navegacion">
            <li>
              <a href="principal">Principal</a>
            </li>
            <li className="actual">
              <a href="lista">Lista</a>
            </li>
            <li>
              <a href="acerca-de">Acerca de</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="home">
        <h2>Bienvenido a la lista de la compra</h2>
      </main>
    </>
  );
};
