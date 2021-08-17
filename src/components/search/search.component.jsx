import React from 'react';
import './search.styles.scss';

export const SearchBox = ({placeholder, handleChange}) => (
    <div className="search-container">
        <input 
            className="search"
            type="search" 
            placeholder={placeholder} 
            onChange={handleChange}
        
        />
    </div>
     
);

