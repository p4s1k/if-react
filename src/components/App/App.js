import React, { useState } from "react";

import { TopSection } from "../TopSection";
import { HomesClass } from "../HomesClass";
import { AvailableHotelsClass } from "../AvailableHotelsClass";

import "./App.css";
import { Sprite } from "../Sprite";

export const App = () => {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <>
      <>
        <TopSection setSearchResult={setSearchResult} />
        {!!searchResult.length && (
          <AvailableHotelsClass searchResult={searchResult} />
        )}
      </>
      <HomesClass />
      <Sprite />
    </>
  );
};
