import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import MovieItem from "./components/MovieItem";
import { getPopularMoviesList } from "../../actions";

class MoviesList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const randomNumber = this.returnRandomNumber();
    dispatch(getPopularMoviesList(randomNumber));
  }

  renderMovieItem = movies => {
    if (movies.length > 0) {
      return Object.keys(movies).map(key => {
        let movieData = movies[key];
        return <MovieItem key={key} index={key} movieData={movieData} />;
      });
    }
  };

  returnRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 10;
    return randomNumber;
  };

  render() {
    const { popularMovies } = this.props;
    const renderItems = this.renderMovieItem(popularMovies);
    return <Fragment>{renderItems}</Fragment>;
  }
}

function mapStateToProps(state) {
  const { popularMovies } = state.getPopularMovies;
  return { popularMovies };
}

export default connect(mapStateToProps)(MoviesList);
