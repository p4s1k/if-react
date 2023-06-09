import React from 'react';
import classNames from "classnames";

import './Cards-row.css'

export const CardsRow = ({children, className}) => {
    return (
        <div className={classNames("cards-row", className)}>
            {children}
        </div>
    );
};
