import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export const DetailsMovie = ({details}) => {
    const img = 'https://image.tmdb.org/t/p/w500';

    const {poster_path, title, overview, vote_average} = details;

    console.log(details)

    return (
        <div className='containerDetailsMovie'>
            <img src={`${img}${poster_path}`} alt='Deu ruim cuzão' />
            <div className='informationMovie'>
                <h1>{title}</h1>
                <p>{overview}</p>
                <div className='evaluation'>
                    <p>Note: {vote_average}</p>
                    <Link className='button' to={'/'}>Return</Link>
                </div>
            </div>
        </div>
    );
};
