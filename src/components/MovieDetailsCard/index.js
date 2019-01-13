import React, { Component } from 'react';
import '../../styles/card.scss';
import { URl_MOVIE_POSTER, IMG_SIZE } from '../../utils';


class MovieDetailsCard extends Component {

  getFormattedGenres = () => {
    const { genres } = this.props.movieData.movie;
    let genresArray = [];
    if (genres !== undefined) {
      genres.map(genre => genresArray.push(genre.name))
      const formattedGenres = genresArray.join(', ');
      return formattedGenres;
    } else {
      return null;
    }
  }

  getFormattedReleaseDate = () => {
    const { release_date } = this.props.movieData.movie;
    if (release_date !== undefined) {
      const formattedReleaseDate = release_date.substring(0, 4);
      return formattedReleaseDate;
    } else {
      return null;
    }
  }

  render() {
    const { title, tagline, overview, poster_path, vote_average, runtime, imdb_id, homepage } = this.props.movieData.movie;

    const formattedGenres = this.getFormattedGenres();
    const formattedReleaseDate = this.getFormattedReleaseDate();

    return (
      <div className="movie-details-container">

        <img src={`${URl_MOVIE_POSTER}${IMG_SIZE}${poster_path}`} alt="Movie Poster" width="200" height="500" />

        <div className="info-container">

          <h2>{title}</h2>
          <h3>{tagline}</h3>

          <ul>
            <li><span className="icon far fa-star"></span><span>{vote_average}/10</span></li>
            <li><span className="far fa-clock"></span><span>{runtime}min</span></li>
            <li><span className="far fa-calendar-check"></span><span>{formattedReleaseDate}</span></li>
          </ul>

          <p>
            {overview}
          </p>

          <p className="genres">
            <span>Genre:&nbsp;</span>{formattedGenres}</p>

          <div className="footer-icons-container">
            <a href={`https://www.imdb.com/title/${imdb_id}`} target="_blank" rel="noopener noreferrer"><i className="imdb-icon fab fa-imdb" title="More on IMDB"></i></a>
            <a href={`${homepage}`} target="_blank" rel="noopener noreferrer" title="Movie Homepage"><i className="more-info-icon fas fa-info-circle"></i></a>
          </div>

        </div>

      </div>
    )
  }
}

export default MovieDetailsCard;