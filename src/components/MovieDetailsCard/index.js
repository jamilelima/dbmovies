import React, { Component, Fragment } from "react";
import "../../styles/card.scss";
import {
  URl_MOVIE_POSTER,
  IMG_SIZE,
  getFormattedReleaseDate,
  getFormattedGenre,
  URL_YOUTUBE
} from "../../utils";
import { connect } from "react-redux";
import { getMovieDetails } from "../../actions";
import { formatMoney } from "../../utils";
import CircleInfo from "../CircleInfo";
import Header from "../Header";
import "../../styles/body.scss";
import ReactPlayer from "react-player";
import ReactDom from "react-dom";

class MovieDetailsCard extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { movieId } = this.props.match.params;
    dispatch(getMovieDetails(movieId));
    // @TODO: Find a better way to do this -> Prevent scroll "jump"
    ReactDom.findDOMNode(this).scrollIntoView();
  }

  translateMovieStatus = status => {
    let statusPtBr;
    switch (status) {
      case "Released":
        statusPtBr = "Lançado";
        break;
      case "Post Production":
        statusPtBr = "Pós produção";
        break;
      default:
        statusPtBr = "Não encontrado";
        break;
    }
    return statusPtBr;
  };

  translateMovieLanguage = language => {
    let languageName;
    switch (language) {
      case "pt":
        languageName = "Português";
        break;
      case "es":
        languageName = "Espanhol";
        break;
      case "hi":
        languageName = "Hindi";
        break;
      case "en":
        languageName = "Inglês";
        break;
      default:
        languageName = "Não informado";
        break;
    }
    return languageName;
  };

  convertAndFormatRuntime = runtime => {
    if (runtime !== null) {
      const hours = runtime / 60;
      const roundHours = Math.floor(hours);
      const minutes = (hours - roundHours) * 60;
      const roundMinutes = Math.round(minutes);
      return `${roundHours}h ${roundMinutes}min`;
    } else {
      return "Não informado";
    }
  };

  formatBudget = budget => {
    if (budget) {
      const formattedBudget = formatMoney.format(budget);
      return formattedBudget;
    } else {
      return "Não informado";
    }
  };

  formatRevenue = revenue => {
    if (revenue) {
      const formattedRevenue = formatMoney.format(revenue);
      return formattedRevenue;
    } else {
      return "Não informado";
    }
  };

  formatProfit = (revenue, budget) => {
    if (revenue) {
      const profit = formatMoney.format(revenue - budget);
      return profit;
    } else {
      return "Não informado";
    }
  };

  formatMovieTrailerUrl = movieVideoObj => {
    if (movieVideoObj !== undefined) {
      if (movieVideoObj.results[0]) {
        const youtubeKey = movieVideoObj.results[0].key;
        const trailerUrl = `${URL_YOUTUBE}${youtubeKey}`;
        return trailerUrl;
      }
    } else {
      return null;
    }
  };

  render() {
    const {
      title,
      overview,
      poster_path,
      vote_average,
      runtime,
      budget,
      revenue,
      status,
      release_date,
      genres,
      original_language,
      videos
    } = this.props.movieData.movie;

    const formattedReleaseDate = getFormattedReleaseDate(release_date);
    const formattedGenre = getFormattedGenre(genres);
    const statusName = this.translateMovieStatus(status);
    const movieLanguage = this.translateMovieLanguage(original_language);
    const movieRuntime = this.convertAndFormatRuntime(runtime);
    const formattedBudget = this.formatBudget(budget);
    const formattedRevenue = this.formatRevenue(revenue);
    const formattedProfit = this.formatProfit(revenue, budget);
    const movieTrailerUrl = this.formatMovieTrailerUrl(videos);

    return (
      <Fragment>
        <Header />
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
                  <span>{statusName}</span>
                </div>
                <div className="info-item">
                  <h6>Idioma</h6>
                  <span>{movieLanguage}</span>
                </div>
                <div className="info-item">
                  <h6>Duração</h6>
                  <span>{movieRuntime}</span>
                </div>
                <div className="info-item">
                  <h6>Orçamento</h6>
                  <span>{formattedBudget}</span>
                </div>
                <div className="info-item">
                  <h6>Receita</h6>
                  <span>{formattedRevenue}</span>
                </div>
                <div className="info-item">
                  <h6>Lucro</h6>
                  <span>{formattedProfit}</span>
                </div>
              </div>
              <div className="movie-info-footer">
                <ul className="movie-details-genres">{formattedGenre}</ul>
                <CircleInfo avarage={vote_average} nameOfClass="big_circle" />
              </div>
            </div>
            <img
              src={`${URl_MOVIE_POSTER}${IMG_SIZE}${poster_path}`}
              alt="Movie poster"
            />
          </div>
          <div className="player-wrapper">
            <ReactPlayer url={movieTrailerUrl} />
          </div>
        </div>
      </Fragment>
    );
  }
}

MovieDetailsCard.defaultProps = {
  movieData: {
    title: "Movie Title",
    overview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptate eligendi eum deserunt! Ullam aut excepturi neque ratione, eveniet rem fugiat quam sit numquam quae eum deserunt dolorum temporibus eius.",
    poster_path: "https://via.placeholder.com/340x510.png",
    vote_average: 0,
    runtime: 0,
    budget: 0,
    revenue: 0,
    status: "",
    release_date: "Não informado",
    genres: [],
    original_language: "",
    videos: ""
  }
};

function mapStateToProps(state) {
  const { movieData } = state;
  return { movieData };
}

export default connect(mapStateToProps)(MovieDetailsCard);
