import React, { createContext, useContext, useReducer, useState } from "react";

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
        childrenAge: [...state.childrenAge, 0],
      };
    case "decrementChildren":
      return {
        ...state,
        countChildren: state.countChildren - 1,
        childrenAge: state.childrenAge.filter(
          (val, i, arr) => i !== arr.length - 1
        ),
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
    case "childrenAge":
      return {
        ...state,
        childrenAge: state.childrenAge.map((el, index) => {
          if (index === action.childrenAgeIndex) {
            return action.childrenAgeValue;
          } else {
            return el;
          }
        }),
      };
    case "hotelsList":
      return {
        ...state,
        hotelsList: [...action.searchHotelsResult],
      };
    case "startDate":
      return { ...state, startDate: action.startDate };
    case "endDate":
      return { ...state, endDate: action.endDate };
    case "dateRange":
      return {
        ...state,
        startDate: action.dateRange[0],
        endDate: action.dateRange[1],
      };
  }
};

const initialState = {
  countAdults: 1,
  countChildren: 0,
  countRooms: 1,
  childrenAge: [],
  startDate: null,
  endDate: null,
};

const searchInitialState = [];

export const SearchDispatchContext = createContext(null);
export const SearchStateContext = createContext(null);
export const SearchResultContext = createContext(null);
export const SearchUpdateResultContext = createContext(null);

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hotelsList, setHotelsList] = useState(searchInitialState);

  return (
    <SearchDispatchContext.Provider value={dispatch}>
      <SearchStateContext.Provider value={state}>
        <SearchResultContext.Provider value={hotelsList}>
          <SearchUpdateResultContext.Provider value={setHotelsList}>
            {children}
          </SearchUpdateResultContext.Provider>
        </SearchResultContext.Provider>
      </SearchStateContext.Provider>
    </SearchDispatchContext.Provider>
  );
};

export const useSearchStateContext = () => useContext(SearchStateContext);
export const useSearchDispatchContext = () => useContext(SearchDispatchContext);
export const useSearchResultContext = () => useContext(SearchResultContext);
export const useSearchUpdateResultContext = () =>
  useContext(SearchUpdateResultContext);
