import { langContext } from "context/LangContext";
import React, { useContext, useState } from "react";
import { FormattedMessage } from "react-intl";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const LangContext = useContext(langContext)

  return (
    <div className="navbarContainer">
      <nav className="nav">
        <h1 id="logo">
          La posada de <span>Don Felipe</span>
        </h1>
        <div
          className={
            menuVisible
              ? "navegacionContainer active"
              : "navegacionContainer desactive"
          }
        >
          <ul className="navegacion">
            <li>
              <a href="/">
                <FormattedMessage id="nav.home" defaultMessage="Inicio" />
              </a>
            </li>
            <li>
              <a href="/posada-don-felipe">
                <FormattedMessage id="nav.posada" defaultMessage="Posada" />
              </a>
            </li>
            <li>
              <a href="/contacto">
                <FormattedMessage id="nav.contact" defaultMessage="Contacto" />
              </a>
            </li>
            <select onChange={(e)=> LangContext.cambiarIdioma(e.target.value)} defaultValue={
                LangContext.lenguaje === 'es-AR' ? 'es-AR' :
                    LangContext.lenguaje === 'en-US' ? 'en-US' : 'es-AR'
            }>
              <option value="es-AR">ES</option>
              <option value="en-US">EN</option>
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
