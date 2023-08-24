import React, { memo } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useSearchDispatchContext } from "../../contexts/SearchStateContext";

export const Calendar = memo(({ startDate, endDate }) => {

  const dispatch = useSearchDispatchContext();

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
