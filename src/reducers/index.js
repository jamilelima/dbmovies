import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// ACTIONS
import {
  SEARCH_MOVIE,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILURE,
  GET_POPULAR_MOVIES,
  GET_POPULAR_MOVIES_SUCCESS,
  GET_POPULAR_MOVIES_FAILURE,
  GET_MOVIE,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE
} from "../actions";

const INITIAL_STATE = {
  isLoading: false,
  movie: [],
  popularMovies: [],
  error: {}
};

const searchMovieList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return { ...state, isLoading: true };
    case SEARCH_MOVIE_SUCCESS:
      return { ...state, isLoading: false, movie: action.data };
    case SEARCH_MOVIE_FAILURE:
      return { ...state, isLoading: false, error: action.data };
    default:
      return state;
  }
};

const movieData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return Object.assign({}, state, {
        isLoading: true,
        movie: [],
        error: null
      });
    case GET_MOVIE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        movie: action.data,
        error: false
      });
    case GET_MOVIE_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        movie: [],
        error: action.data
      });
    default:
      return state;
  }
};

const getPopularMovies = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return Object.assign({}, state, {
        isLoading: true,
        popularMovies: [],
        error: null
      });
    case GET_POPULAR_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        popularMovies: action.data,
        error: false
      });
    case GET_POPULAR_MOVIES_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        popularMovies: [],
        error: action.data
      });
    default:
      return state;
  }
};

const dbMoviesApp = combineReducers({
  searchMovieList,
  movieData,
  getPopularMovies,
  routing: routerReducer
});

export default dbMoviesApp;
