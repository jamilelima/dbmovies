import React, { Component } from 'react';
import Header from './Header';
import MovieDetailsCard from './MovieDetailsCard';
import Footer from './Footer';
import { connect } from 'react-redux';
import { getMovieDetails } from '../actions';

const favoriteMovies = [297802, 299536, 383498, 363088, 284054, 141052, 297762, 263115, 284052, 271110, 345920, 300668];
class MainPage extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getMovieDetails(this.randomNumbers()));
  }

  randomNumbers = () => {
    const number = favoriteMovies[Math.floor(Math.random() * favoriteMovies.length)];
    return number;
  }


  render() {
    const { movieData } = this.props;
    return (
      <React.Fragment>
        <Header />
        <MovieDetailsCard movieData={movieData} />
        <Footer />
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  const { movieData } = state;
  return { movieData }
}

export default connect(mapStateToProps)(MainPage);