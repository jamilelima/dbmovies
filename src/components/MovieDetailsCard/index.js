import React from 'react';
import '../../styles/card.scss';

const MovieDetailsCard = ({ props }) => (
  <div className="movie-card">

    <div className="wrapper">

      <a href="#">
        <img src="https://bit.ly/2RI8rmp" alt="cover" className="cover" width="200" height="300" />
      </a>

      <div className="movie-main-info-container">

        <div className="info">

          <div className="movie-title">Captain Marvel</div>

          <div className="movie-subtitle">Subtitle</div>

        </div>

      </div>

      <div className="movie-description">

        <div className="movie-genre">
          <span className="genre">action</span>
          <span className="genre">fantasy</span>
          <span className="genre">adventure</span>
        </div>

        <div className="movie-details">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore impedit mollitia quod ratione assumenda explicabo esse autem odio repellat similique incidunt, minima laborum, dicta asperiores pariatur, quas expedita animi quos... <a href="#">read more</a>
          </p>

          <div className="more-options">
            <a href="#" data-tooltip="Watch trailer" data-placement="top">
              <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c545.png" width="30" height="20" alt="Watch trailer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>


);

export default MovieDetailsCard;