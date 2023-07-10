import React from "react";

import { TopSection } from "../TopSection";
import { Homes } from "../Homes";

import "./App.css";
import { Sprite } from "../Sprite";
import { AvailableHotels } from "../AvailableHotels";
import { SearchContextProvider } from "../../contexts/SearchContext";

export const App = () => {
  return (
    <>
      <SearchContextProvider>
        <TopSection />
        <AvailableHotels />
      </SearchContextProvider>
      <Homes />
      <Sprite />
    </>
  );
};
