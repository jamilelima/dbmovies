import React, { Component } from 'react';
import Header from './Header';
import SearchMovieBar from './SearchMovieBar';
import Footer from './Footer';
import MovieDetailsCard from './MovieDetailsCard';


const API_KEY = '?api_key=f0ec5dea593ad4b500ce7d88c8dede74';
const API_KEY_ALT = '&api_key=f0ec5dea593ad4b500ce7d88c8dede74';
const URL_SEARCH = 'https://api.themoviedb.org/3/search/movie?query=';
const URL_DETAIL = 'https://api.themoviedb.org/3/movie/';



class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
    }
  }



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