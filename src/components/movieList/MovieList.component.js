import React from 'react';
import { Card } from '../card/card.component';
import './movie-list.styles.scss';

export const MovieList = props => (
    <div className="movie-list">
        {props.movies.map(movie => (
          <Card key={movie.imdbID} movie={movie} />
        ))}

    </div>
);

