import React from 'react';
import './card.styles.scss';


export const Card = (props) => (
    <div className="card-container">
        <div className="image-container">
            <img src={props.movie.Poster} alt={props.movie.Title} />
              
        </div>
        <div className="movie-details">
            <p>{props.movie.Title}</p> 
             
        </div> 
         
    </div>
);
