import React, { memo } from "react";
import {
  useSearchContext,
  useSearchDispatchContext,
  useSearchStateContext,
} from "../../contexts/SearchStateContext";

export const ChildrenAgeBlock = memo( ({childrenAge}) => {
  // const state = useSearchStateContext();
  const dispatch = useSearchDispatchContext();
  console.log("rend child")

  const options = [];

  for (let i = 0; i < 18; i++) {
    options.push({ years: i, label: `${i} years old` });
  }

  return (
    <div className="dropdown__child-age-select-container">
      {childrenAge.map((value, index) => (
        <select
          key={index}
          value={childrenAge[index]}
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
