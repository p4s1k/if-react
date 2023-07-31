import React, { useState } from "react";

import { useClickOutside } from "../../hooks/useClickOutside";

import "./FilterForm.css";
import { FilterFormCounter } from "../FilterFormCounter";
import { useSearchContext } from "../../contexts/SearchContext";
import { ChildrenAgeBlock } from "../ChildrenAgeBlock";

export const FilterForm = () => {
  const [isOpened, setIsOpened] = useState(false);

  const { state, dispatch } = useSearchContext();

  const ref = useClickOutside(() => setIsOpened(false));

  const openColeDropDawn = () => {
    setIsOpened(!isOpened);
  };

  const { adults, children, rooms } = {
    adults: {
      name: "Adults",
      min: 1,
      max: 30,
      increment: function () {
        dispatch({ type: `increment${this.name}` });
      },
      decrement: function () {
        dispatch({ type: `decrement${this.name}` });
      },
    },
    children: {
      name: "Children",
      min: 0,
      max: 10,
      increment: function () {
        dispatch({ type: `increment${this.name}` });
      },
      decrement: function () {
        dispatch({ type: `decrement${this.name}` });
      },
    },
    rooms: {
      name: "Rooms",
      min: 1,
      max: 30,
      increment: function () {
        dispatch({ type: `increment${this.name}` });
      },
      decrement: function () {
        dispatch({ type: `decrement${this.name}` });
      },
    },
  };

  const { countAdults, countChildren, countRooms } = state;

  return (
    <div ref={ref} className="input-block_filter input-block">
      <input
        className="search-form__item-filter"
        id="filter"
        type="text"
        readOnly="readonly"
        placeholder={`${adults.name} ${countAdults} - ${children.name} ${countChildren} - ${rooms.name} ${countRooms}`}
        onClick={() => openColeDropDawn()}
      />
      {isOpened && (
        <div className="item-filter__dropdown">
          <div className="dropdown__counter-container">
            <FilterFormCounter counter={adults} />
            <FilterFormCounter counter={children} />
            <FilterFormCounter counter={rooms} />
          </div>
          <div className="dropdown__counter-container"></div>
          {countChildren > children.min && (
            <div className="dropdown__child-age-container">
              <div className="dropdown__child-age-title">
                What is the age of the child you’re travelling with?
              </div>
              <ChildrenAgeBlock />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
