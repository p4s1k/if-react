import React from "react";

import "./FilterFormCounter.css";
import { useFilterContext } from "../../contexts/FilterContext";

export const FilterFormCounter = ({ counter }) => {
  const { state } = useFilterContext();

  const { name, min, max } = counter;

  return (
    <div className="item-filter__counter" key="${counterKey}">
      <div className="counter__title-block">
        <span className="counter__title">{name}</span>
      </div>
      <div className="counter__buttons-block">
        <button
          className="counter__button counter__button_minus counter__button_disabled"
          type="button"
          disabled={state[`count${name}`] === min}
          onClick={() => counter.decrement()}
        >
          -
        </button>
        <input
          className="item-filter__input"
          type="text"
          readOnly="readonly"
          value={state[`count${name}`]}
        />
        <button
          className="counter__button counter__button_plus"
          type="button"
          disabled={state[`count${name}`] === max}
          onClick={() => counter.increment()}
        >
          +
        </button>
      </div>
    </div>
  );
};
