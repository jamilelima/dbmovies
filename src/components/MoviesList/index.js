import React, { Component } from 'react';
import MovieItem from './components/MovieItem';
import './styles.scss';

const movies = {
  movie1: {
    movieId: 1,
    original_title: 'Wonder Woman',
    poster: null,
  },
  movie2: {
    movieId: 1,
    original_title: 'Wonder Woman',
    poster: null,
  },
  movie3: {
    movieId: 1,
    original_title: 'Wonder Woman',
    poster: null,
  },
  movie4: {
    movieId: 1,
    original_title: 'Wonder Woman',
    poster: null,
  },
  movie5: {
    movieId: 1,
    original_title: 'Wonder Woman',
    poster: null,
  },
  movie6: {
    movieId: 1,
    original_title: 'Wonder Woman',
    poster: null,
  },
  movie7: {
    movieId: 1,
    original_title: 'Wonder Woman',
    poster: null,
  },
  movie8: {
    movieId: 1,
    original_title: 'Wonder Woman',
    poster: null,
  },
}

class MoviesList extends Component {

  navigateToMovieDetails = () => {
    // @TODO: Implementar navegação para Movie Details
  }

  render() {
    return (
      <div className="movies-list-container">
        {
          Object.keys(movies).map(key => (
            <MovieItem
              key={key}
              movieDetails={movies[key]}
              onClick={this.navigateToMovieDetails}
            />
          ))
        }
      </div>
    );
  }
}

export default MoviesList;