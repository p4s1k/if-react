import React, { memo } from "react";

import "./FilterFormCounter.css";
import { useSearchDispatchContext } from "../../contexts/SearchStateContext";

export const FilterFormCounter = memo(({ name, min, max, count }) => {
  const dispatch = useSearchDispatchContext();

  return (
    <div className="item-filter__counter" key="${counterKey}">
      <div className="counter__title-block">
        <span className="counter__title">{name}</span>
      </div>
      <div className="counter__buttons-block">
        <button
          className="counter__button counter__button_minus counter__button_disabled"
          type="button"
          disabled={count === min}
          onClick={() => dispatch({ type: `decrement${name}` })}
        >
          -
        </button>
        <input
          className="item-filter__input"
          type="text"
          readOnly="readonly"
          value={count}
        />
        <button
          className="counter__button counter__button_plus"
          type="button"
          disabled={count === max}
          onClick={() => dispatch({ type: `increment${name}` })}
        >
          +
        </button>
      </div>
    </div>
  );
});
