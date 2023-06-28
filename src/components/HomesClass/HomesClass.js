import React, { Component } from "react";

import { Heading } from "../Heading";
import { Wrapper } from "../Wrapper";

import "./HomesClass.css";
import { getPopularHotels } from "../../services/popular";

export class HomesClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
    };
  }

  componentDidMount() {
    getPopularHotels().then((hotels) => this.setState({ hotels }));
  }

  render() {
    const { hotels } = this.state;

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
  }
}
