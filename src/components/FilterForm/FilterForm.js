import React, { memo, useState } from "react";

import { useClickOutside } from "../../hooks/useClickOutside";

import "./FilterForm.css";
import { FilterFormCounter } from "../FilterFormCounter";
import {
  useSearchDispatchContext,
  useSearchStateContext,
} from "../../contexts/SearchStateContext";
import { ChildrenAgeBlock } from "../ChildrenAgeBlock";

export const FilterForm = memo(() => {
  console.log("rend form");
  const [isOpened, setIsOpened] = useState(false);

  const state = useSearchStateContext();
  const dispatch = useSearchDispatchContext();

  const ref = useClickOutside(() => setIsOpened(false));

  const openCloseDropDawn = () => {
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
    <div
      ref={ref}
      className="input-block_filter input-block"
      onClick={() => openCloseDropDawn()}
    >
      <input
        className="search-form__item-filter"
        id="filter"
        type="text"
        readOnly="readonly"
        placeholder={`${adults.name} ${countAdults} - ${children.name} ${countChildren} - ${rooms.name} ${countRooms}`}
      />
      {isOpened && (
        <div
          className="item-filter__dropdown"
          onClick={(event) => event.stopPropagation()}
        >
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
              <ChildrenAgeBlock childrenAge={state.childrenAge} />
            </div>
          )}
        </div>
      )}
      <div className="search-form__adults">
        <label htmlFor="adults" onClick={(event) => event.stopPropagation()}>
          {adults.name}
        </label>
        <input id="adults" type="text" placeholder={countAdults} />
      </div>
      <div className="search-form__children">
        <label htmlFor="children" onClick={(event) => event.stopPropagation()}>
          {children.name}
        </label>
        <input id="children" type="text" placeholder={countChildren} />
      </div>
      <div className="search-form__rooms">
        <label htmlFor="rooms" onClick={(event) => event.stopPropagation()}>
          {rooms.name}
        </label>
        <input id="rooms" type="text" placeholder={countRooms} />
      </div>
    </div>
  );
});
