import React from "react";
import "./ProductosCard.css";

const ProductosCard = ({ produ , handleClick , setSearchNav , handleFavorites ,setSlider ,handleImage}) => {

  return (
    <div className="producto ">
      <div className="producto__aling">
        <img className="producto__image" onClick={()=>handleImage(produ)} src={produ.image} alt="" />
        <div className="producto__favorites" onClick={()=>handleFavorites(produ)}>✩</div>
      </div>
      <div className="producto__container">
        <h2 className="producto__title">{produ.title}</h2>
        <div className="producto__flex">
          <p className="producto__category">{produ.category}</p>
          <p className="producto__description">Precio: ${produ.price}</p>
        </div>
        <button className="btn btn-danger" onClick={()=>handleClick(produ)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export { ProductosCard };
