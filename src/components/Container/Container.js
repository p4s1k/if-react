import React from "react";
import classNames from "classnames";

import "./Container.css";

export const Container = ({ children, className }) => {
  return <div className={classNames("container", className)}>{children}</div>;
};
