import React from "react";
import classNames from "classnames";

import "./Wrapper.css";

export const Wrapper = ({ children, className }) => (
  <div className={classNames("wrapper", className)}>
    {children}
  </div>
);
