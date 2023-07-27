import React, { createContext, useContext, useState } from "react";

export const SearchContext = createContext(null);

export const SearchContextProvider = ({ children }) => {
  const [contextHotels, setContextHotels] = useState([]);

  return (
    <SearchContext.Provider value={{ contextHotels, setContextHotels }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
