import React, { Component } from 'react';
import Header from './Header';
import SearchMovieBar from './SearchMovieBar';
import Footer from './Footer';
import MovieDetailsCard from './MovieDetailsCard';

class MainPage extends Component {


  render() {
    return (
      <React.Fragment>
        <Header />
        <MovieDetailsCard />
        {/* <SearchMovieBar />
        <Footer /> */}
      </React.Fragment>
    )
  }
}

export default MainPage;