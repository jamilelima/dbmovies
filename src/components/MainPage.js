import React, { Component } from 'react';
import Header from './Header';
import SearchMovieBar from './SearchMovieBar';
import MoviesList from './MoviesList';
import Footer from './Footer';

class MainPage extends Component {


  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchMovieBar />
        <MoviesList />
        <Footer />
      </React.Fragment>
    )
  }
}

export default MainPage;