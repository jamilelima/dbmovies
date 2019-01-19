/* Core */
import React, { Component } from "react";
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
