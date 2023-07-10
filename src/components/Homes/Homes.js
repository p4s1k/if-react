import React, { useEffect, useState } from "react";

import { Heading } from "../Heading";
import { Wrapper } from "../Wrapper";

import "./Homes.css";
import { getPopularHotels } from "../../services/popular";

export const Homes = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getPopularHotels().then((hotels) => setHotels(hotels));
  }, []);

  return (
    <section className="homes">
      <Wrapper className="homes__wrapper">
        <Heading className="homes__heading">Homes guests loves</Heading>
        <div className="cards-row homes__cards-row">
          {hotels.map(({ id, name, city, country, imageUrl }) => (
            <div key={id} className="card homes__card">
              <div className="card__image homes__card__image">
                <img src={imageUrl} alt="view" />
              </div>
              <span className="homes__card__title card__title">{name}</span>
              <span className="card__location homes__card__location">
                {city}, {country}
              </span>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};
