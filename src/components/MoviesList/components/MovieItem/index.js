import React from 'react';
import './styles.scss';

const MovieItem = ({ original_title, poster }) => (
  <div className="movie-item-container">
    <img src="https://pbs.twimg.com/media/DwG19SEUYAEzmwk.jpg:small" alt="Poster Image" className="movie-poster" />
    <p className="movie-title">{original_title}</p>
  </div>
)


export default MovieItem;