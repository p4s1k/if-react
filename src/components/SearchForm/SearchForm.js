import React, { useState } from "react";
import { search } from "../../services/search";

import "./SearchForm.css";
import { useSearchContext } from "../../contexts/SearchContext";
import { Calendar } from "../Calendar";
import { FilterForm } from "../FilterForm";
import { FilterContextProvider } from "../../contexts/FilterContext";

const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { setContextHotels } = useSearchContext();

  const searchHotels = async (event) => {
    if (event.type === "keydown") {
      if (event.key !== "Enter") {
        return;
      }
    }

    if (inputValue) {
      const searchResult = await search(inputValue);

      if (searchResult.length === 0) {
        alert("NOTHING FOUND");
      }

      setContextHotels(searchResult);
    } else {
      alert("EMPTY VALUE");
    }

    setInputValue("");
  };

  return (
    <div className="container top-selection__search-block-container">
      <form className="search-form" action="./" method="get">
        <div className="container search-form__item-name-container">
          <label htmlFor="name">Your destination or hotel name</label>
          <div className="input-block_name input-block">
            <svg>
              <use href="#search" />
            </svg>
            <input
              className="search-form__item-name"
              id="name"
              type="text"
              placeholder="New York"
              value={inputValue}
              onKeyDown={(event) => searchHotels(event)}
              onChange={(event) => setInputValue(event.target.value)}
            />
          </div>
        </div>
        <div className="container search-form__item-date-container">
          <label htmlFor="calendar">Check-in — Check-out</label>
          <div className="input-block__date input-block">
            <Calendar />
          </div>
          <div className="search-form__check-date_mobile">
            <label htmlFor="in">Check-in date</label>
            <input id="in" type="date" />
          </div>
          <div className="search-form__check-date_mobile">
            <label htmlFor="out">Check-out date</label>
            <input id="out" type="date" />
          </div>
        </div>
        <FilterContextProvider>
          <FilterForm />
        </FilterContextProvider>
        <div className="input-block_button input-block">
          <button
            className="search-form__item-button"
            type="button"
            onClick={(event) => searchHotels(event)}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
