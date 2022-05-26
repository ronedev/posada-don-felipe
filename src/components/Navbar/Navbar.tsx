import React, { useState } from "react";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  return (
    <div className="navbarContainer">
      <nav className="nav">
        <h1 id="logo">
          La posada de <span>Don Felipe</span>
        </h1>
        <div className={menuVisible ? 'navegacionContainer active' : 'navegacionContainer desactive'}>
          <ul className='navegacion'>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/posada-don-felipe">Posada</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
            <select>
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </ul>
        </div>
        <div
          className={menuVisible ? "menuIcon active" : "menuIcon desactive"}
          onClick={() => setMenuVisible(!menuVisible)}
        >
          <span id="supLine"></span>
          <span id="midLine"></span>
          <span id="botLine"></span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
