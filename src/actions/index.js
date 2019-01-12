// CONSTANTS

import {
  URL_MOVIES_SEARCH, URL_MOVIE_DETAIL, API_KEY, API_KEY_ALT
} from '../utils';

// ACTION TYPES

export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
export const SEARCH_MOVIE_FAILURE = 'SEARCH_MOVIE_FAILURE';
export const GET_MOVIE = 'GET_MOVIE';
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
export const GET_MOVIE_FAILURE = 'GET_MOVIE_FAILURE';

// PURE FUNCTIONS

function searchMovie(text) {
  return {
    type: SEARCH_MOVIE,
    text,
  }
}

function searchMovieSuccess(data, keyword) {
  return {
    type: SEARCH_MOVIE_SUCCESS,
    data,
    keyword
  };
}

function searchMovieFailure(error) {
  return {
    type: SEARCH_MOVIE_FAILURE,
    error,
  };
}

function getMovie() {
  return {
    type: GET_MOVIE,
  }
}

function getMovieSuccess(data) {
  return {
    type: GET_MOVIE_SUCCESS,
    data,
  }
}

function getMovieFailure(error) {
  return {
    type: GET_MOVIE_FAILURE,
    error,
  }
}

// SERVICE API

export function searchMovieList(keyword) {
  let url = `${URL_MOVIES_SEARCH}${keyword}${API_KEY_ALT}`;
  return async function (dispatch) {
    dispatch(searchMovie())
    try {
      const response = await fetch(url);
      const json = await response.json();
      const data = json.results;
      return dispatch(searchMovieSuccess(data, keyword));
    }
    catch (error) {
      return dispatch(searchMovieFailure(error));
    }
  }
}


export function getMovieDetails(movieId) {
  const urlMovieDetails = `${URL_MOVIE_DETAIL}${movieId}${API_KEY}`;
  return async function (dispatch) {
    dispatch(getMovie())
    try {
      const response = await fetch(urlMovieDetails);
      const data = await response.json();
      return dispatch(getMovieSuccess(data));
    }
    catch (error) {
      return dispatch(getMovieFailure(error));
    }
  }
}