import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const MovieItem = ({ original_title, poster }) => (
  <div className="movie-item-container">
    <img src="https://pbs.twimg.com/media/DwG19SEUYAEzmwk.jpg:small" alt="Poster Image" className="movie-poster" />
    <div className="movie-title-container">
      <h3 className="movie-title">Wonder Woman</h3>
    </div>
  </div>
  // <Link className="movie-item-container" to={'/'}>
  //   <img src="https://pbs.twimg.com/media/DwG19SEUYAEzmwk.jpg:small" alt="Poster Image" className="movie-poster" />
  //   <div className="">
  //     <h3 className="">Wonder Woman</h3>
  //   </div>
  // </Link >
)


export default MovieItem;