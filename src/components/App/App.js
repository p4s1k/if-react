import React, { useState } from "react";

import { TopSection } from "../TopSection";
import { Homes } from "../Homes";

import "./App.css";
import { Sprite } from "../Sprite";
import { AvailableHotels } from "../AvailableHotels";
import { SearchContext } from "../../contexts/SearchContext";

export const App = () => {
  const [contextHotels, setContextHotels] = useState([]);

  return (
    <>
      <SearchContext.Provider value={{ contextHotels, setContextHotels }}>
        <TopSection />
        <AvailableHotels />
      </SearchContext.Provider>
      <Homes />
      <Sprite />
    </>
  );
};
