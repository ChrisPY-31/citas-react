import React from "react";
import "./EquipoCard.css";
const EquipoCard = ({ personas }) => {
  return (
    <div className="personas">
      <div className="personas__container">
        <div className="personas__image-center">
          <img className="personas__image clase" src={personas.image} alt="" />
        </div>
        <h3 className="personas__name clase">{personas.name}</h3>
        <p className="personas__parrafo clase">{personas.description}</p>
        <div className="personas__redes">
          <img className="personas__facebook image " src={'https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png'} alt="" />
          <img className="personas__twitter image" src={'http://store-images.s-microsoft.com/image/apps.50484.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.2c71c1ea-c28f-4dd1-b72d-c43cdd3476f4'} alt="" />
        </div>
      </div>
    </div>
  );
};

export { EquipoCard };
