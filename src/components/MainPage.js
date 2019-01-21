import React, { Component } from "react";
import Header from "./Header";
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
      </React.Fragment>
    );
  }
}

export default MainPage;
