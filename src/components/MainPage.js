import React, { Component } from 'react';
import Header from './Header';
import MovieDetailsCard from './MovieDetailsCard';
import { connect } from 'react-redux';
import { getMovieDetails } from '../actions';

class MainPage extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getMovieDetails(299537));
  }


  render() {
    const { movieDetails } = this.props;
    return (
      <React.Fragment>
        <Header />
        <MovieDetailsCard movieDetails={movieDetails} />
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  const { movieDetails } = state;
  return { movieDetails }
}

export default connect(mapStateToProps)(MainPage);