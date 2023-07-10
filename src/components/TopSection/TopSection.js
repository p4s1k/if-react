import React from "react";
import { Wrapper } from "../Wrapper";

import "./TopSection.css";
import { Header } from "../Header";
import { DownloadsBlock } from "../DownloandsBlock";
import SearchForm from "../SearchForm/SearchForm";

export const TopSection = () => {
  return (
    <div className="top-selection">
      <Wrapper className="top-selection__wrapper">
        <Header />
        <section className="container top-selection-content__container">
          <h1 className="top-selection__heading">
            Discover stays
            <br />
            to live, work or just relax
          </h1>
          <SearchForm />
          <DownloadsBlock />
        </section>
      </Wrapper>
    </div>
  );
};
