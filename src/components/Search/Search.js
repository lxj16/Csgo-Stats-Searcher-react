import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    input: ""
  };

  onChangeHandler = e => {
    this.setState({ input: e.target.value });
  };

  onFormSubmit = e => {
    this.props.onFormSubmit(this.state.input);

    e.preventDefault();
  };

  onClickHandler = e => {
    this.onFormSubmit(this.state.input);
    e.preventDefault();
  };
  render() {
    return (
      <div className="search-bar ui segment search">
        <h1>Search Player</h1>
        <form className="ui form">
          <div className="search-bar ui segment">
            <label for="steam-ID" className="label">
              Steam ID eg.76561198249008602
            </label>
            <input
              type="text"
              name="text"
              id="steam-ID"
              placeholder="Your Steam ID"
              value={this.state.input}
              onChange={this.onChangeHandler}
            />
          </div>
          <button class="ui secondary button" onClick={this.onClickHandler}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
