import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useSearchContext } from "../../contexts/SearchContext";

export const Calendar = () => {
  const { state, dispatch } = useSearchContext();
  const { startDate, endDate } = state;

  return (
    <>
      <DatePicker
        id={"calendar"}
        dateFormat="EEE, MMM dd"
        selectsRange={true}
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
};
