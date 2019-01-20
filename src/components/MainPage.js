import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import MoviesList from "./MoviesList";
import "../styles/main.scss";

class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchBar />
        <MoviesList />
        <Footer />
      </React.Fragment>
    );
  }
}

export default MainPage;
