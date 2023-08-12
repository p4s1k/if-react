import React, { useState } from "react";
import { search } from "../../services/search";

import "./SearchForm.css";
import { Calendar } from "../Calendar";
import { FilterForm } from "../FilterForm";
import { useSearchContext } from "../../contexts/SearchContext";
import {MobileCalendar} from "../MobileCalendar";

const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useSearchContext();

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

      dispatch({ type: "hotelsList", searchHotelsResult: searchResult });
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
              placeholder="Enter a request..."
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
            <label htmlFor="startDate">Check-in date</label>
            <MobileCalendar id={"startDate"} />
          </div>
          <div className="search-form__check-date_mobile">
            <label htmlFor="endDate">Check-out date</label>
            <MobileCalendar id={"endDate"} />
          </div>
        </div>
        <FilterForm />
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
