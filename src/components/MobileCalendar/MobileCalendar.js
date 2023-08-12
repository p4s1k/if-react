import React from "react";
import DatePicker from "react-datepicker";
import { useSearchContext } from "../../contexts/SearchContext";

export const MobileCalendar = ({ id }) => {
  const { state, dispatch } = useSearchContext();
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
