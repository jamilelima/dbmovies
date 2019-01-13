import React, { Component } from 'react';
import Header from './Header';
import MovieDetailsCard from './MovieDetailsCard';
import { connect } from 'react-redux';
import { getMovieDetails } from '../actions';

class MainPage extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getMovieDetails(299537)); //@TODO: Implementar array com meus filmes preferidos e passa-los randomicamente pra cá
  }


  render() {
    const { movieData } = this.props;
    return (
      <React.Fragment>
        <Header />
        <MovieDetailsCard movieData={movieData} />
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  const { movieData } = state;
  return { movieData }
}

export default connect(mapStateToProps)(MainPage);