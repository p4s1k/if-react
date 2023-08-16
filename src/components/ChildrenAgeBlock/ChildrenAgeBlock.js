import React, { memo } from "react";
import { useSearchContext } from "../../contexts/SearchContext";

export const ChildrenAgeBlock = memo(({ childrenCount }) => {
  const { state, dispatch } = useSearchContext();

  const options = [];

  for (let i = 0; i < 18; i++) {
    options.push({ years: i, label: `${i} years old` });
  }

  return (
    <div className="dropdown__child-age-select-container">
      {state.childrenAge.map((value, index) => (
        <select
          key={index}
          value={state.childrenAge[index]}
          onChange={(el) =>
            dispatch({
              type: "childrenAge",
              childrenAgeIndex: index,
              childrenAgeValue: el.target.value,
            })
          }
        >
          {options.map(({ years, label }) => (
            <option value={years} key={years}>
              {label}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
});
