import React, { Component } from "react";
import { search } from "../../services/search";

import "./SearchFormClass.css";

export class SearchFormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  searchHotels = async (event) => {
    const { value } = this.state;

    if (event.type === "keydown") {
      if (event.key !== "Enter") {
        return;
      }
    }

    if (value) {
      const searchResult = await search(value);

      if (searchResult.length === 0) {
        alert("NOTHING FOUND");
      }

      this.props.setSearchResult(searchResult);
    } else {
      alert("EMPTY VALUE");
    }

    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;

    return (
      <div className="container top-selection__search-block-container">
        <form className="search-form" action="./" method="get">
          <div className="container search-form__item-name-container">
            <label htmlFor="name">Your destination or hotel name</label>
            <div className="input-block_name input-block">
              <svg>
                <use href="#search" />
              </svg>
              <input
                className="search-form__item-name"
                id="name"
                type="text"
                placeholder="New York"
                value={value}
                onKeyDown={(event) => this.searchHotels(event)}
                onChange={(event) =>
                  this.setState({ value: event.target.value })
                }
              />
            </div>
          </div>
          <div className="container search-form__item-date-container">
            <label htmlFor="date-in">Check-in — Check-out</label>
            <div className="input-block__date input-block">
              <input
                className="search-form__check-date"
                id="date-in"
                type="date"
              />
            </div>
            <div className="search-form__check-date_mobile">
              <label htmlFor="in">Check-in date</label>
              <input id="in" type="date" />
            </div>
            <div className="search-form__check-date_mobile">
              <label htmlFor="out">Check-out date</label>
              <input id="out" type="date" />
            </div>
          </div>
          <div className="input-block_filter input-block">
            <input
              className="search-form__item-filter"
              id="filter"
              type="text"
              readOnly="readonly"
              placeholder="drop down panel coming soon"
            />
            <div className="item-filter__dropdown">
              <div className="dropdown__counter-container"></div>
              <div className="dropdown__child-age-container">
                <div className="dropdown__child-age-title">
                  What is the age of the child you’re travelling with?
                </div>
                <div className="dropdown__child-age-select-container"></div>
              </div>
            </div>
            <div className="search-form__adults">
              <label htmlFor="adults">Adults</label>
              <input id="adults" type="text" placeholder="2" />
            </div>
            <div className="search-form__children">
              <label htmlFor="children">Children</label>
              <input id="children" type="text" placeholder="0" />
            </div>
            <div className="search-form__rooms">
              <label htmlFor="rooms">Rooms</label>
              <input id="rooms" type="text" placeholder="1" />
            </div>
          </div>
          <div className="input-block_button input-block">
            <button
              className="search-form__item-button"
              type="button"
              onClick={(event) => this.searchHotels(event)}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}
