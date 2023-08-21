import React, { memo } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {
  useSearchContext,
  useSearchDispatchContext,
  useSearchStateContext,
} from "../../contexts/SearchStateContext";

export const Calendar = memo(({ startDate, endDate }) => {
  // const { state, dispatch } = useSearchContext();
  console.log("rend cal");
  // const { state } = useSearchStateContext();
  const dispatch = useSearchDispatchContext();
  // const { startDate, endDate } = state;

  return (
    <>
      <DatePicker
        id={"calendar"}
        dateFormat="EEE, MMM dd"
        selectsRange={true}
        onKeyDown={(event) => event.preventDefault()}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          dispatch({ type: "dateRange", dateRange: update });
        }}
        monthsShown={2}
        placeholderText={"Check-in — Check-out"}
      />
    </>
  );
});
