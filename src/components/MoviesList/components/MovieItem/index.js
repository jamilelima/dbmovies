import React, { Component } from "react";
import "../../../../styles/movie_item.scss";

import { URl_MOVIE_POSTER, IMG_SIZE } from "../../../../utils";

import CircleInfo from "../../../CircleInfo";

import { getFormattedReleaseDate, getFormattedGenre } from "../../../../utils";

class MovieItem extends Component {
  render() {
    const {
      title,
      overview,
      poster_path,
      vote_average,
      release_date,
      genres
    } = this.props.movieData.movie;

    const formattedReleaseDate = getFormattedReleaseDate(release_date);
    const formattedGenre = getFormattedGenre(genres);

    return (
      <div className="container">
        <div className="card-content">
          <img src={`${URl_MOVIE_POSTER}${IMG_SIZE}${poster_path}`} alt="" />
          <div className="card-info">
            <div className="header-container">
              <h1 className="title-text">{title}</h1>
              <CircleInfo avarage={vote_average} />
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
