import React, { useMemo, useState } from "react";

import "./SearchForm.css";
import { Calendar } from "../Calendar";
import { FilterForm } from "../FilterForm";
import {
  useSearchDispatchContext,
  useSearchStateContext,
} from "../../contexts/SearchStateContext";
import { MobileCalendar } from "../MobileCalendar";
import { search } from "../../services/search";

const SearchForm = () => {
  const state = useSearchStateContext();

  const [inputValue, setInputValue] = useState("");
  const dispatch = useSearchDispatchContext();

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

  const {
    startDate,
    endDate,
    countAdults,
    countChildren,
    countRooms,
    childrenAge,
  } = state;

  const { adultsCounter, childrenCounter, roomsCounter } = useMemo(() => {
    return {
      adultsCounter: {
        name: "Adults",
        min: 1,
        max: 30,
      },
      childrenCounter: {
        name: "Children",
        min: 0,
        max: 10,
      },
      roomsCounter: {
        name: "Rooms",
        min: 1,
        max: 30,
      },
    };
  }, []);

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
        <div className="search-form__item-date-container container">
          <label htmlFor="calendar">Check-in — Check-out</label>
          <div className="input-block__date input-block">
            <Calendar startDate={startDate} endDate={endDate} />
          </div>
          <div className="search-form__check-date_mobile">
            <label htmlFor="startDate">Check-in date</label>
            <MobileCalendar
              id={"startDate"}
              startDate={startDate}
              endDate={endDate}
            />
          </div>
          <div className="search-form__check-date_mobile">
            <label htmlFor="endDate">Check-out date</label>
            <MobileCalendar
              id={"endDate"}
              startDate={startDate}
              endDate={endDate}
            />
          </div>
        </div>
        <FilterForm
          adultsCounter={adultsCounter}
          childrenCounter={childrenCounter}
          roomsCounter={roomsCounter}
          childrenAge={childrenAge}
          countAdults={countAdults}
          countChildren={countChildren}
          countRooms={countRooms}
        />
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
