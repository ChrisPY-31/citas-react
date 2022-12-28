import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart  } from "react-icons/ai";
import { useState } from "react";
import "./Nav.css";

const Nav = ({ setSearchNav ,carrito , setCarrito , handleCerrar , setSlider , carritoFast ,setCarritoFast}) => {
  const [compras, setCompras] = useState(false)
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    setSearchNav(true);
    setSlider(true)
  };

  const handleVaciar = () =>{
    setCarritoFast([])
    setCarrito([])
    
  }
  const SearchNav = ()=>{
    setSearchNav(false)
    setSlider(false)
  }
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <h1 className="nav__titulo" onClick={handleClick}>
            MercaShot
          </h1>
        </div>
        <div className="nav__description">
          <ul className="nav__ul">
            <li className="nav__li">
              <Link
                className="nav__link "
                to={"favorites"}
                onClick={SearchNav}
              >
                Favorites
              </Link>
            </li>
            <li className="nav__li">
              <Link
                to={"SobreNosotros"}
                className="nav__link  "
                onClick={SearchNav}
              >
                Sobre Nosotros
              </Link>
            </li>
          </ul>
          <div className="nav__carrito">
            <AiOutlineShoppingCart className="nav__carro" onClick={()=>setCompras(!compras)}/>
            <div className="nav__cerrar">{carrito.length > 9 ? '9+':carrito.length}</div>
          </div>
          {compras && (
          <div className="nav__compras">
            <ul className="nav__list-ul">
              <li className="nav__list-li">Image</li>
              <li className="nav__list-li">Precio</li>
              <li className="nav__list-li">Cantidad</li>
            </ul>
            {carritoFast.map(producto =>{
              return <div className='nav__posicion' key={producto.id}>
                <img className='nav__image'src={producto.image} alt="" />
                <h3 className='nav__price'>{producto.price}</h3>
                <p className='nav__cantidad'>{producto.cantidad}</p>
                <div className='nav__eliminar' onClick={()=>handleCerrar(producto.id)}>X</div>
              </div>
            })}
            <div className="nav__botones">
              <button className="btn btn-danger botton" onClick={handleVaciar}>Vaciar Carrito</button>
              <button className="btn btn-danger botton" >Proceder Pago</button>
            </div>
          </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export { Nav };
