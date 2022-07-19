import React from 'react';
import {Link} from 'react-router-dom'

import './styles.css';

export const ListMovies = ({movies}) => {
    const img = 'https://image.tmdb.org/t/p/w500';
    
    return (
        <div className='containerPopularMovies'>
            {movies.map(movie => {
                return (
                    <div className='listMovies' key={movie.id}>
                        <div className='movie'>
                            <div className='containerImage'>
                                <Link to={`/details/${movie.id}`}><img src={`${img}${movie.poster_path}`} alt={movie.title} /></Link>
                            </div>
                            <p>{movie.title}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    ); 
}