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

  render() {
    const {
      title,
      tagline,
      overview,
      poster_path,
      imdb_id,
      homepage
    } = this.props.movieData.movie;

    // const formattedReleaseDate = this.getFormattedReleaseDate();

    return (
      <div className="container">
        <div className="card-content">
          <img src={`${URl_MOVIE_POSTER}${IMG_SIZE}${poster_path}`} alt="" />
          <div className="card-info">
            <div className="header-container">
              <h1 className="title-text">{title}</h1>
              <CircleInfo />
            </div>
            <div className="movie-details">
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
