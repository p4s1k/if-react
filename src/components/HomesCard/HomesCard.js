import React from "react";

import "./HomesCard.css";

export const HomesCard = (props) => {
  const { name, imageUrl, city, country } = props.card;

  return (
    <div className="card homes__card">
      <div className="card__image homes__card__image">
        <img src={imageUrl} alt="view" />
      </div>
      <span className="homes__card__title card__title">{name}</span>
      <span className="card__location homes__card__location">
        {city}, {country}
      </span>
    </div>
  );
};
