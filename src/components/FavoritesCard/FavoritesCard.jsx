import React from "react";
import "./FavoritesCard.css";

const FavoritesCard = ({ favo ,favoritesDelete}) => {

  return (
    <div className="favorites-card ">
      <div className="favorites-card__container">
        <img className="favorites-card__image" src={favo.image} alt="" />
      </div>
      <div className="favorites-card__flex">
          <h2 className="favorites-card__title ">{favo.title}</h2>
          <p className="favorites-card__category">{favo.category}</p>
          <p className="favorites-card__description">Precio: ${favo.price}</p>
          <p className="favorites-card__delete" onClick={()=>favoritesDelete(favo.id)}>Eliminar</p>
        </div>
    </div>
  );
};

export { FavoritesCard };
