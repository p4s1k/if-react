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
  hotelsList: [],
  startDate: null,
  endDate: null,
};

export const SearchContext = createContext(null);

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
