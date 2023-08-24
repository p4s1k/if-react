import React from "react";

import "./AvailableHotels.css";

import { Wrapper } from "../Wrapper";
import { Heading } from "../Heading";
import { useSearchStateContext } from "../../contexts/SearchStateContext";

export const AvailableHotels = () => {
  const state = useSearchStateContext();

  const { hotelsList } = state;

  if (!hotelsList) {
    return;
  }
  if (hotelsList.length !== 0) {
    return (
      <section className="available">
        <Wrapper>
          <Heading>Available Hotels</Heading>
          <div className="cards-row available__cards-row">
            {hotelsList.map(({ id, name, city, country, imageUrl }) => (
              <div className="card available__card" key={id}>
                <div className="card__image">
                  <img src={imageUrl} alt="view" />
                </div>
                <span className="card__title available__card__title">
                  {name}
                </span>
                <span className="card__location available__card__location">
                  {city}, {country}
                </span>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
    );
  }
};
