import React, { Component } from 'react';
import Header from './Header';
import MovieDetailsCard from './MovieDetailsCard';

class MainPage extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <React.Fragment>
        <Header />
        <MovieDetailsCard />
      </React.Fragment>
    )
  }
}

export default MainPage;