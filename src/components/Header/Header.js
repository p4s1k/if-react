import React from "react";
import { Button } from "../Button";

import "./Header.css";

export const Header = () => (
  <header className="header">
    <div className="header__panel">
      <Button className="header__button_logo">
        <svg className="button-icon">
          <use href="#logo" />
        </svg>
      </Button>
      <nav className="header__menu-row">
        <ul className="menu-list header__menu-list">
          <li>
            <a href="#">Stays</a>
          </li>
          <li>
            <a href="#">Attractions</a>
          </li>
        </ul>
        <div className="header__menu-icons">
          <button className="button header__button_theme">
            <svg className="button-icon">
              <use href="#theme" />
            </svg>
          </button>
          <button className="button header__button_profile">
            <svg className="button-icon">
              <use href="#profile" />
            </svg>
          </button>
          <button className="button header__button_burger">
            <svg className="button-icon">
              <use href="#burger" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  </header>
);
