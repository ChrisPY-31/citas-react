import React from "react";
import { FavoritesCard } from "../FavoritesCard/FavoritesCard";
import "./Favorites.css";
const Favorites = ({ favorites, favoritesDelete }) => {
  

  return (
    <div className="favorites">
      <div className="favorites__container">
        {favorites.map((favo) => {
          return (
            <div className="favorites__card" key={favo.id}>
              <FavoritesCard favo={favo} favoritesDelete={favoritesDelete} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Favorites };
