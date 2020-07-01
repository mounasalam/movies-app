import React from 'react';
import {connect} from 'react-redux';
import { Row, Col, Container} from 'react-md';
import {AppBar} from 'react-md';
// e.g. { getTopMovies, ... }
import * as movieActions from '../../modules/common/movie-browser.actions';//'./movie-browser.actions';
import * as movieHelpers from '../../modules/common/movie-browser.helper';
import MovieList from '../movie-list.component';//'./movie-list.component';

class MovieBrowser extends React.Component {

  componentDidMount() {
    this.props.getTopMovies(1);
  }

  render() {
    const {topMovies} = this.props;
    const movies = movieHelpers.getMoviesList(topMovies.response);

    return (
      <div>
        <AppBar title='Movie Browser' />
        <Container>
          <Row>
            <p>Search will go here</p>
          </Row>
          <Row>
             <MovieList movies={movies} isLoading={topMovies.isLoading} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(
  // Map nodes in our state to a properties of our component
  (state) => ({
    topMovies: state.movieBrowser.topMovies
  }),
  // Map action creators to properties of our component
  { ...movieActions }
)(MovieBrowser);