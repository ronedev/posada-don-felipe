import React from "react";
import { FormattedMessage } from "react-intl";
import imageGroup from "../../img/sanRafael.png";

const SanRafael = () => {
  return (
    <section className="sanRafaelSection">
      <img src={imageGroup} alt="grupo de imagenes" />
      <div className="sanRafaelDescription">
        <p>
          <FormattedMessage
            id="sanRafael.text1"
            defaultMessage="En San Rafael no solo te esperan muchos de los mejores paisajes del pais, tambien diversion, aventura, fiesta, paz, armonia y excelente gastronomia. Haciendo de nuestra ciudad la mejor eleccion para disfrutar tanto en familia como individualmente."
          />
        </p>
        <p>
          <FormattedMessage id="sanRafael.text2" defaultMessage="Y en La Posada de Don Felipe te damos la comodidad necesaria para que en nuestra ciudad te sientas como en casa. ¿Todavia te queda alguna duda?" />
        </p>
        <button className="btn2" onClick={()=> window.location.href = '/posada-don-felipe'}>
          <FormattedMessage id="sanRafael.btn" defaultMessage="Ver la posada" />
        </button>
      </div>
    </section>
  );
};

export { SanRafael };
