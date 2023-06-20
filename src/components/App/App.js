import React, { useState } from "react";

import { TopSection } from "../TopSection";
import { Homes } from "../Homes";

import "./App.css";
import { Sprite } from "../Sprite";
import { AvailableHotels } from "../AvailableHotels";

export const App = () => {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <>
      <>
        <TopSection
          setSearchResult={setSearchResult}
        />
          {!!searchResult.length && <AvailableHotels searchResult={searchResult}/>}
      </>
      <Homes />
      <Sprite />
    </>
  );
};
