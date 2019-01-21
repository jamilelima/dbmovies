/* Core */
import React, { Component, Fragment } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

/* Redux */
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

/* Reducers */
import dbMoviesApp from "./reducers";

/* Components */
import MovieDetailsCard from "./components/MovieDetailsCard";
import MainPage from "./components/MainPage";
import MovieItem from "./components/MoviesList/components/MovieItem";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

let store = createStore(dbMoviesApp, applyMiddleware(thunk));

class RootContainerComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route
            path="/movie/:movieId"
            render={routeProps => (
              <MovieDetailsCard
                {...routeProps}
                movieData={this.props.movieData}
              />
            )}
          />
          <Route
            path="/search/:movieId"
            render={routeProps => (
              <Fragment>
                <Header />
                <SearchBar />
                <MovieItem
                  {...routeProps}
                  movieData={this.props.movieData.movie}
                />
              </Fragment>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieData: state.movieData
  };
};

let RootContainer = connect(
  mapStateToProps,
  null
)(RootContainerComponent);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}
