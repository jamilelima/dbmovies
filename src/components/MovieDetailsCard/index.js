import React from 'react';

const MovieDetailsCard = ({ props }) => (
  <div className="card-container">
    <div>
      <img src="" alt="" />
    </div>

    <div>
      <h1>Captain Marvel</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <p> Officia nihil vitae illo velit dolore corrupti dignissimos incidunt earum ipsa alias ullam neque dolor soluta ipsum libero, esse impedit perferendis atque! Officia nihil vitae illo velit dolore corrupti dignissimos incidunt earum ipsa alias ullam neque dolor soluta ipsum libero, esse impedit perferendis atque!</p>

      <h3>Adventure, Science Fiction</h3>
      <p>Production</p>

      <div>
        <div>Release: <span>2019-08-03</span></div>
        <div>Box Office: <span>R$ 50.000,00</span></div>
        <div>Running Time: <span>16 mins</span></div>
        <div>Vote Average <span>7.5/10</span></div>
      </div>
    </div>

  </div>
);

export default MovieDetailsCard;