import React from "react";
import DatePicker from "react-datepicker";
import {
  useSearchContext,
  useSearchDispatchContext,
  useSearchStateContext,
} from "../../contexts/SearchStateContext";

export const MobileCalendar = ({ id }) => {
  // const { state, dispatch } = useSearchContext();
  const dispatch = useSearchDispatchContext();
  const state = useSearchStateContext();

  const { startDate, endDate } = state;

  return (
    <DatePicker
      id={id}
      dateFormat="EEE d MMM yyyy"
      minDate={id === "endDate" ? startDate : null}
      selected={id === "endDate" && startDate > endDate ? null : state[id]}
      onChange={(date) => dispatch({ type: id, [id]: date })}
    />
  );
};
