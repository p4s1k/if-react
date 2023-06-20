import React from 'react';
import classNames from "classnames";

import "./Button.css"

export const Button = ({children, className}) =>
    (
        <button className={classNames("button", className)}>{children}</button>
    );
