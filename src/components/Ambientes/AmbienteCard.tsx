import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { ambienteSelectedContext } from "context/AmbienteSelectedContext";
import { useSwipeable } from "react-swipeable";

interface props {
  ambiente: {
    name: string;
    description: string;
    image: string;
  };
  id: number;
  totalAmbientes: number;
}

const AmbienteCard = ({ ambiente, id, totalAmbientes }: props) => {
  const { ambienteSelected, ambienteNext, ambientePrev, changeAmbienteSelected } = useContext(
    ambienteSelectedContext
  );

  const handlers = useSwipeable({
    onSwipedLeft: (e) =>
      ambienteSelected !== totalAmbientes - 1
        ? changeAmbienteSelected(id + 1)
        : null,
    onSwipedRight: (e) =>
      ambienteSelected !== 0 ? changeAmbienteSelected(id - 1) : null,
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <>
      <article
        className={
          id === ambienteSelected ? "ambienteCard selected" : id === ambientePrev ? 'ambienteCard prev' : id === ambienteNext ? 'ambienteCard next' : "ambienteCard"
        }
        {...id === ambienteSelected && handlers}
      >
        <div className="ambienteInfo">
          <h2>
            <FormattedMessage id={ambiente.name} />
          </h2>
          <p>
            <FormattedMessage id={ambiente.description} />
          </p>
          <button className="btn2" onClick={()=> window.location.href = '/contacto'}>
            <FormattedMessage id="ambiente.btn" defaultMessage="Reservar" />
          </button>
        </div>
        <img src={ambiente.image} alt="ambiente" />
      </article>
    </>
  );
};

export { AmbienteCard };
