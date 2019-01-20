import React from "react";

export const URL_MOVIES_SEARCH =
  "https://api.themoviedb.org/3/search/movie?query=";
export const URL_MOVIE_DETAIL = "https://api.themoviedb.org/3/movie/";
export const API_KEY = "?api_key=f0ec5dea593ad4b500ce7d88c8dede74";
export const API_KEY_ALT = "&api_key=f0ec5dea593ad4b500ce7d88c8dede74";
export const URl_MOVIE_POSTER = "https://image.tmdb.org/t/p/";
export const URL_YOUTUBE = "https://www.youtube.com/embed/";
export const IMG_SIZE = "w342/";

// METHODS
export const getFormattedReleaseDate = release_date => {
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

export const getFormattedGenre = genres => {
  if (genres !== undefined) {
    return Object.keys(genres).map(key => {
      let genreName = genres[key].name;
      return (
        <li key={key} index={key} className="genre-item">
          {genreName}
        </li>
      );
    });
  } else {
    return null;
  }
};

export const formatMoney = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});
