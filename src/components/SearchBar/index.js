// CORE
import React, { Component } from "react";
import { connect } from "react-redux";

// HELPERS
import Autosuggest from "react-autosuggest";
import {
  API_KEY_ALT,
  URL_MOVIES_SEARCH,
  IMG_SIZE_SMALL,
  URl_MOVIE_POSTER
} from "../../utils";

// STYLES
import "../../styles/header.scss";
import "../../styles/search_theme.scss";

// ACTIONS
import { getMovieDetails } from "../../actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  getSuggestionValue = suggestion => {
    return suggestion.title;
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const suggestionValue = value.trim(); // The trim() method removes whitespace from both sides of a string.
    if (suggestionValue.length > 0) {
      let url = `${URL_MOVIES_SEARCH}${suggestionValue}${API_KEY_ALT}&language=pt-BR`;
      fetch(url)
        .then(response => response.json())
        .then(json => json.results)
        .then(data => {
          const results = data.map(movie => {
            const movieData = {};
            movieData.id = movie.id;
            movieData.title = movie.title;
            movieData.image = movie.poster_path;
            movieData.year =
              movie.release_date === ""
                ? "0000"
                : movie.release_date.substring(0, 4);
            return movieData;
          });
          this.setState({
            suggestions: results
          });
        })
        .catch(error => console.log(error, " - Exception"));
    } else {
      this.setState({
        suggestions: []
      });
    }
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  renderSuggestion = suggestion => (
    <a>
      <img
        className="result-poster"
        src={
          suggestion.image == null
            ? null
            : `${URl_MOVIE_POSTER}${IMG_SIZE_SMALL}${suggestion.image}`
        }
        alt="Movie Poster"
      />
      <div className="result-text">
        <div className="search-result-name">{suggestion.title}</div>
        {suggestion.year}
      </div>
    </a>
  );

  onSuggestionSelected = (event, { suggestion, method }) => {
    const { dispatch } = this.props;
    if (method === "enter") event.preventDefault();
    dispatch(getMovieDetails(suggestion.id));
    this.setState({ value: "" });
  };
  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      value,
      onChange: this.onChange,
      placeholder: "Busque um filme pelo nome..."
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default connect(
  null,
  null
)(SearchBar);
