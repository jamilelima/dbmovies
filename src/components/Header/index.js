// CORE
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

// HELPERS
import Autosuggest from 'react-autosuggest';
import { API_KEY_ALT, URL_MOVIES_SEARCH } from '../../utils';

// STYLES
import '../../styles/header.scss';
import '../../styles/search_theme.scss';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
    }
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    })
  }

  handleKeyDown = (event) => {
    const { value } = this.state;
    if (event.key === 'Enter') {
      return this.handleSubmit(value);
    }
  }

  handleSubmit = (searchText) => {
    const { dispatch } = this.props;
    dispatch(push(`/search/${searchText}`));
    this.setState({ value: '' });
  }

  getSuggestionValue = (suggestion) => {
    return suggestion.title;
  }

  onSuggestionsFetchRequested = ({ value }) => {
    console.log({ value });
    const suggestionValue = value.trim(); // The trim() method removes whitespace from both sides of a string.
    if (suggestionValue.length > 0) {
      let url = `${URL_MOVIES_SEARCH}${suggestionValue}${API_KEY_ALT}`;
      fetch(url).then(response => response.json())
        .then(json => json.results)
        .then(data => {
          const results = data.map(movie => {
            const movieDetails = {};
            movieDetails.id = movie.id
            movieDetails.title = movie.title
            movieDetails.img = movie.poster_path
            movieDetails.year = (movie.release_date === '') ? "0000" : movie.release_date.substring(0, 4)
            return movieDetails
          });
          this.setState({
            suggestions: results
          });
        }).catch(error => console.log(error, " - Exception"));
    } else {
      this.setState({
        suggestions: []
      })
    }
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  renderSuggestion = (suggestion) => (
    <a>
      <div className="search-result-text">
        {suggestion.title}
      </div>
    </a>
  );

  onSuggestionSelected = (event, { suggestion, method }) => {
    if (method === 'enter')
      event.preventDefault();
    this.props.dispatch(push('/movie/' + suggestion.id));
    this.setState({ value: '' });
  };

  render() {

    const { value, suggestions } = this.state;

    const inputProps = {
      value,
      onChange: this.onChange,
      onKeyPress: this.handleKeyDown,
      placeholder: 'Search Movie Title...'
    };

    return (
      <nav>
        <div className="logo">
          <h1>MOVIES DB</h1>
        </div>
        <div className="search">
          <Autosuggest
            // theme={theme}
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionSelected={this.onSuggestionSelected}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps} />
        </div>
      </nav>
    );
  }
}


export default connect(null, null)(Header);