import React, { Component } from 'react';
import './App.css';
import Movie from './components/movies';
import { MovieCreationFontIcon } from 'react-md';

// import MovieBrowser from './modules/common/movie-browser/movie-browser.container';
import MovieBrowser from './components/containers/movie-browser.container';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // const movies = [
    //   {
    //     id: 0, 
    //     title: 'Avengers', 
    //     posterSrc: '',
    //     overview: 'fffefefefefefefefef'
    //   },
    //   {
    //     id: 1, 
    //     title: 'Avengers 2', 
    //     posterSrc: '',
    //     overview: 'This is my second overview'
    //   },
    // ];

    // var movieRows = [];
    // movies.forEach((movie) => {
    //   const movieRow = <Movie movie={movie} />
      
    //    movieRows.push(movieRow);
    // });
    // this.state = {rows: movieRows};


    this.performSearch()
  }

  performSearch()  {
    console.log('using movie fb')
  } 
  render () {
    return (
    //   <MuiThemeProvider>
    // </MuiThemeProvider>
      <MovieBrowser />
    // <div className="App">
    //   <table className="app-header">
    //     <tbody>
    //       <tr>
    //         <td>
    //           <img alt="applogo" width="50" src="green_app_icon.svg"/>
    //         </td>
    //         <td></td>
    //         <td width="8">
    //           <h2>Movies Search</h2>
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>

    //   <input placeholder="Enter movie name" className="form-control search-input" />


    //   {this.state.rows}
    // </div>
    );
}
}
export default App;
