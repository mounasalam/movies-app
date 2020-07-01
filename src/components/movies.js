import React from 'react';

class Movie extends React.Component {
    render() {
        return <table key={this.props.movie.id} className="text-left">
        <tbody>
          <tr>
            <td>
              <img alt="poster" src={this.props.movie.posterSrc} width="120"/>
            </td>
            <td className="text-left">
              {this.props.movie.title}
              <p>{this.props.movie.overview}</p>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default Movie