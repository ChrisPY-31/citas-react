import React from "react";
import "./Description.css";
const Description = ({ imageProdu }) => {
  return (
    <div className="imageProdu">
      <div className="imagenProdu__productos">
        {imageProdu.map((producto) => (
          <div key={producto.id} className="imageProdu__container">
            <div className="imagenProdu__flexOne">
              <img className="imageProdu__image" src={producto.image} alt="" />
            </div>
            <div className="imagenProdu__flexTwo">
              <div className="imagenProdu__two">
                <p className="imagenProdu__nuevo">Nuevo</p>
                <h2 className="imageProdu__h2">{producto.title}</h2>
                <div className="imagenProdu__precios">
                  <p className="imageProdu__suma">${producto.price + 94} <span className="imagenProdu__suma-span">70</span></p>
                  <p className="imagenProdu__precio">${producto.price} <span className="imagenProdu__descuento">20% OFF</span></p>
                  <p className="imagenProdu__metodosPago">6 X ${Math.ceil(producto.price / 6)} sin intereses</p>
                </div>
                <p className="imagenProdu__disponible">Stock disponible</p>
                <p className="imageProdu__raiting">cantidad: 1 unidad <span className="imageProdu__raiting-count">{producto.rating.count} disponibles</span></p>
                <button className="btn btn-primary">Comprar ahora</button>
                <div className="imagenProdu__Mercado">
                  <p className="imagenProdu__protegida">✅ <span className="imagenProdu__protegida--span">Compra Protegida </span> recibe el producto que esperabas o te devolvemos tu dinero.</p>
                  <p className="imagenProdu__Mercado">🏆 <span className="imagenProdu__Mercado--span">Mercado Puntos</span> Sumas 19 puntos. </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Description };
