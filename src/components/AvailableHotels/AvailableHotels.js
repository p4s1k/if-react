import React from "react";

import "./AvailableHotels.css";

import { Wrapper } from "../Wrapper";
import { Heading } from "../Heading";

export const AvailableHotels = ({ searchResult }) => (
  <section className="available">
    <Wrapper>
      <Heading>Available Hotels</Heading>
      <div className="cards-row available__cards-row">
        {searchResult.map(({ id, name, city, country, imageUrl }) => (
          <div className="card available__card" key={id}>
            <div className="card__image">
              <img src={imageUrl} alt="view" />
            </div>
            <span className="card__title available__card__title">{name}</span>
            <span className="card__location available__card__location">
              {city}, {country}
            </span>
          </div>
        ))}
      </div>
    </Wrapper>
  </section>
);
