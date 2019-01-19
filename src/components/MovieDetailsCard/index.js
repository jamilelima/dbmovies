import React, { Component } from "react";
import "../../styles/card.scss";
import {
  URl_MOVIE_POSTER,
  IMG_SIZE,
  getFormattedReleaseDate,
  getFormattedGenre
} from "../../utils";

class MovieDetailsCard extends Component {
  render() {
    const {
      title,
      tagline,
      overview,
      poster_path,
      vote_average,
      runtime,
      imdb_id,
      homepage,
      release_date,
      genres
    } = this.props.movieData.movie;

    const formattedReleaseDate = getFormattedReleaseDate(release_date);
    const formattedGenre = getFormattedGenre(genres);

    return (
      <div className="movie-details-container">
        <div className="movie-title-container">
          <h1 className="movie-title-text">{title}</h1>
          <p className="formatted-release-date">{formattedReleaseDate}</p>
        </div>
        <div className="info-container">
          <div className="overview-container">
            <h3 className="overview-title">Sinopse</h3>
            <p className="movie-details-overview-text">{overview}</p>

            <h3 className="overview-title">Informações</h3>
            <div className="info-items-container">
              <div className="info-item">
                <h6>Situação</h6>
                <span>Lançado</span>
              </div>
              <div className="info-item">
                <h6>Idioma</h6>
                <span>Inglês</span>
              </div>
              <div className="info-item">
                <h6>Duração</h6>
                <span>2h 10min</span>
              </div>
              <div className="info-item">
                <h6>Orçamento</h6>
                <span>$180.000.000,00</span>
              </div>
              <div className="info-item">
                <h6>Receita</h6>
                <span>$853.977.000,00</span>
              </div>
              <div className="info-item">
                <h6>Lucro</h6>
                <span>$673.977.000,00</span>
              </div>
            </div>
            <ul className="movie-details-genres">{formattedGenre}</ul>
          </div>
          <div>
            <img src={`${URl_MOVIE_POSTER}${IMG_SIZE}${poster_path}`} alt="" />
          </div>
        </div>
        <iframe
          width="auto"
          height="720"
          src="https://www.youtube.com/embed/GX33bIOA5aA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="Movie trailer"
        />
      </div>
    );
  }
}

export default MovieDetailsCard;
