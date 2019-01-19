import React, { Component } from "react";
import "../../../../styles/movie_item.scss";

import { URl_MOVIE_POSTER, IMG_SIZE } from "../../../../utils";

import CircleInfo from "../../../CircleInfo";

class MovieItem extends Component {
  getFormattedReleaseDate = () => {
    const { release_date } = this.props.movieData.movie;
    if (release_date !== undefined) {
      const formattedReleaseDate = release_date
        .substring(0, 10)
        .split("-")
        .reverse()
        .join("/");
      return formattedReleaseDate;
    } else {
      return null;
    }
  };

  getFormattedGenre = () => {
    const { genres } = this.props.movieData.movie;
    if (genres !== undefined) {
      return Object.keys(genres).map(key => {
        let genreName = genres[key].name;
        return (
          <li key={genres[key]} index={key} className="genre-item">
            {genreName}
          </li>
        );
      });
    } else {
      return null;
    }
  };

  render() {
    const {
      title,
      tagline,
      overview,
      poster_path,
      imdb_id,
      homepage
    } = this.props.movieData.movie;

    const formattedReleaseDate = this.getFormattedReleaseDate();
    const formattedGenre = this.getFormattedGenre();

    return (
      <div className="container">
        <div className="card-content">
          <img src={`${URl_MOVIE_POSTER}${IMG_SIZE}${poster_path}`} alt="" />
          <div className="card-info">
            <div className="header-container">
              <h1 className="title-text">{title}</h1>
              <CircleInfo />
            </div>
            <p className="release-date-text">{formattedReleaseDate}</p>
            <div className="movie-details">
              <p className="overview-text">{overview}</p>
              <ul className="genre-list-container">{formattedGenre}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
