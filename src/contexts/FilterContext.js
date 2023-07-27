import React, { createContext, useContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementAdults":
      return {
        ...state,
        countAdults: state.countAdults + 1,
      };
    case "decrementAdults":
      return {
        ...state,
        countAdults: state.countAdults - 1,
      };
    case "incrementChildren":
      return {
        ...state,
        countChildren: state.countChildren + 1,
      };
    case "decrementChildren":
      return {
        ...state,
        countChildren: state.countChildren - 1,
      };
    case "incrementRooms":
      return {
        ...state,
        countRooms: state.countRooms + 1,
      };
    case "decrementRooms":
      return {
        ...state,
        countRooms: state.countRooms - 1,
      };
  }
};

const initialState = {
  countAdults: 1,
  countChildren: 0,
  countRooms: 1,
};

export const FilterContext = createContext(null);

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
