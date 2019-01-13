import React, { Component } from 'react';
import '../../styles/card.scss';
import { URl_MOVIE_POSTER, IMG_SIZE } from '../../utils';


class MovieDetailsCard extends Component {
  static defaultProps = {
    title: "",
    tagline: "",
    overview: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eligendi ipsam soluta tempora magnam perferendis sequi, quas laboriosam placeat, nemo fugit ipsa quam nisi quos animi maxime blanditiis? At, animi.",
    genres: ["Drama", "Action"],
    poster_path: "https://via.placeholder.com/342",
    vote_average: "7.2",
    runtime: 100,
    imdb_id: "https://www.imdb.com/",
    homepage: "http://www.google.com",
  }

  getFormattedGenres = () => {
    const { genres } = this.props.movieDetails.movie;
    let genresArray = [];
    if (genres !== undefined) {
      genres.map(genre => genresArray.push(genre.name))
      const formattedGenres = genresArray.join(', ');
      return formattedGenres;
    } else {
      return null;
    }
  }

  render() {
    const { title, tagline, overview, genres, poster_path, vote_average, runtime, imdb_id, homepage } = this.props.movieDetails.movie;

    const formattedGenres = this.getFormattedGenres()

    return (
      <div className="movie-details-container">

        <img src={`${URl_MOVIE_POSTER}${IMG_SIZE}${poster_path}`} alt="Movie Poster" />

        <div className="info-container">

          <h2>{title}</h2>
          <h3>{tagline}</h3>

          <ul>
            <li><span className="icon far fa-star"></span><span>{vote_average}/10</span></li>
            <li><span className="far fa-clock"></span><span>{runtime}min</span></li>
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