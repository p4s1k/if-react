import React, { memo, useState } from "react";

import { useClickOutside } from "../../hooks/useClickOutside";

import "./FilterForm.css";
import { FilterFormCounter } from "../FilterFormCounter";
import { ChildrenAgeBlock } from "../ChildrenAgeBlock";

export const FilterForm = memo(
  ({ adultsCounter,childrenCounter,roomsCounter, childrenAge, countAdults, countChildren, countRooms }) => {
    const [isOpened, setIsOpened] = useState(false);

    const ref = useClickOutside(() => setIsOpened(false));

    const openCloseDropDawn = () => {
      setIsOpened(!isOpened);
    };

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
          placeholder={`${adultsCounter.name} ${countAdults} - ${childrenCounter.name} ${countChildren} - ${roomsCounter.name} ${countRooms}`}
        />
        {isOpened && (
          <div
            className="item-filter__dropdown"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="dropdown__counter-container">
              <FilterFormCounter
                name={adultsCounter.name}
                min={adultsCounter.min}
                max={adultsCounter.max}
                count={countAdults}
              />
              <FilterFormCounter
                name={childrenCounter.name}
                min={childrenCounter.min}
                max={childrenCounter.max}
                count={countChildren}
              />
              <FilterFormCounter
                name={roomsCounter.name}
                min={roomsCounter.min}
                max={roomsCounter.max}
                count={countRooms}
              />
            </div>
            <div className="dropdown__counter-container"></div>
            {countChildren > childrenCounter.min && (
              <div className="dropdown__child-age-container">
                <div className="dropdown__child-age-title">
                  What is the age of the child you’re travelling with?
                </div>
                <ChildrenAgeBlock childrenAge={childrenAge} />
              </div>
            )}
          </div>
        )}
        <div className="search-form__adults">
          <label htmlFor="adults" onClick={(event) => event.stopPropagation()}>
            {adultsCounter.name}
          </label>
          <input id="adults" type="text" placeholder={countAdults} />
        </div>
        <div className="search-form__children">
          <label
            htmlFor="children"
            onClick={(event) => event.stopPropagation()}
          >
            {childrenCounter.name}
          </label>
          <input id="children" type="text" placeholder={countChildren} />
        </div>
        <div className="search-form__rooms">
          <label htmlFor="rooms" onClick={(event) => event.stopPropagation()}>
            {roomsCounter.name}
          </label>
          <input id="rooms" type="text" placeholder={countRooms} />
        </div>
      </div>
    );
  }
);
