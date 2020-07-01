import React, { Component } from 'react';
import './App.css';
import Movie from './components/movies';
import { MovieCreationFontIcon } from 'react-md';

class App extends Component {
  constructor(props) {
    super(props);
    const movies = [
      {
        id: 0, 
        title: 'Avengers', 
        posterSrc: '',
        overview: 'fffefefefefefefefef'
      },
      {
        id: 1, 
        title: 'Avengers 2', 
        posterSrc: '',
        overview: 'This is my second overview'
      },
    ];

    var movieRows = [];
    movies.forEach((movie) => {
      const movieRow = <Movie movie={movie} />
      
       movieRows.push(movieRow);
    });
    this.state = {rows: movieRows};
  }
  render () {
    return (
    <div className="App">
      <table className="app-header">
        <tbody>
          <tr>
            <td>
              <img alt="applogo" width="50" src="green_app_icon.svg"/>
            </td>
            <td></td>
            <td width="8">
              <h2>Movies Search</h2>
            </td>
          </tr>
        </tbody>
      </table>

      <input placeholder="Enter movie name" className="form-control search-input" />


      {this.state.rows}
    </div>
    );
}
}
export default App;
