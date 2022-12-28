import React, { useState } from "react";
import "./SobreNosotros.css";
import { ingenieros } from "../ingenieros";
import { EquipoCard } from "../EquipoCard/EquipoCard";
const SobreNosotros = () => {
  const [inge, setInge] = useState(ingenieros);
  return (
    <div className="nosotros">
      <div className="nosotros__container">
        <h2 className="nosotros__h2">Sobre nosotros</h2>
        <div className="nosotros__sobreNosotros">
          <div className="nosotros__img">
            <img
              className="nosotros__image"
              src="https://img.freepik.com/foto-gratis/grupo-personas-trabajando-plan-negocios-oficina_1303-15872.jpg?w=1060&t=st=1672213923~exp=1672214523~hmac=c4dcae46b63cec05be80381c3b8e5bc409345b716a3e99fd2dbb6bd5ed6e3f44"
              alt=""
            />
          </div>
          <div className="nosotros__informacion">
            <p className="nosotros__parrafo">
              Si has llegado hasta aquí es porque ahora mismo te estarás
              preguntando "¿y qué es Mr. MercaShot?" Pues Mr. MercaShot es como
              tu temazo favorito: muchas cosas a la vez. Es la actitud de
              viernes, es la sonrisa del primer día de vacaciones o el momento
              justo antes de soplar las velas del pastel. Mr. MercaShot es una
              forma de ver la vida, una marca que, desde el año 2011, crea
              productos con mensajes que contagian felicidad y alegría. Lo que
              empezo siento una tienda online ahora es una empresa mundial donde
              puedes comprar productos assesible.
            </p>
          </div>
        </div>
      </div>
      <div className="nosotros__equipo">
        <div className="nosotros__equipocon">
          <h2 className="nosotros__equipo--h2">Nuestro Equipo</h2>
          <p className="nosotros__equipo-parrafo">
            En nuestro equipo cada uno esta especificado en una area y proviene
            en un sector pero a todos nos une el Marketing online , con el
            tiempo hemos formado un grupo de trabajo excepcional que se
            complementa a la perfeccion y que sabe transmitir y poner en
            practica sus conocimiento y habilidades{" "}
          </p>
          <div className="nosotros__personas">
            {inge.map((personas) => (
              <div className="nosotros__flex">
                <EquipoCard personas={personas} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { SobreNosotros };
