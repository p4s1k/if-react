import React, { memo } from "react";
import DatePicker from "react-datepicker";
import { useSearchDispatchContext } from "../../contexts/SearchStateContext";

export const MobileCalendar = memo((props) => {
  const dispatch = useSearchDispatchContext();
  const { id, startDate, endDate } = props;

  return (
    <DatePicker
      id={id}
      dateFormat="EEE d MMM yyyy"
      minDate={id === "endDate" ? startDate : null}
      selected={id === "endDate" && startDate > endDate ? null : props[id]}
      onChange={(date) => dispatch({ type: id, [id]: date })}
    />
  );
});
