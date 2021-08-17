import React from 'react';
import './banner.styles.scss';

const Banner = () => (
    <header className="banner">
      <div className="banner__contents">
        <h1 className="banner__title">Adventures in Babysitting</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
        A babysitter must battle her way through the big city after being 
        stranded there with the kids she's looking after.A babysitter must ...
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>

);

export default Banner;