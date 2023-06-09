import React from "react";

import "./App.css";

import { Wrapper } from "../Wrapper";
import { CardsRow } from "../Cards-row";
import { Heading } from "../Heading";
import { Container } from "../Container";
import { HomesCard } from "../HomesCard";

import { data } from "./data";

const getHomesCardsList = (list) =>
  list.map((el) => <HomesCard key={el.id} card={el}></HomesCard>);

export const App = () => {
  return (
    <section className="homes">
      <Wrapper className={"homes__wrapper"}>
        <Container className="homes__container">
          <Heading className={"homes__heading"}>Homes guests loves</Heading>
          <CardsRow className={"homes__cards-row"}>
            {getHomesCardsList(data)}
          </CardsRow>
        </Container>
      </Wrapper>
    </section>
  );
};
