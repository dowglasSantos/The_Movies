import React from 'react';
import './styles.css';

import {ListMovies} from '../../components/ListMovies';
import {useList} from '../../hooks/useList';

export const Main = () => {
    const movies = useList();

    return (
        <div className='containerHome'>
            <h1>Movies</h1>
            <ListMovies movies={movies} />
        </div>
    );
};
























/* 

adult: false
backdrop_path: "/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg"
genre_ids: (5) [10751, 16, 12, 35, 14]
id: 438148
original_language: "en"
original_title: "Minions: The Rise of Gru"
overview: "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions."
popularity: 15259.056
poster_path: "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg"
release_date: "2022-06-29"
title: "Minions: The Rise of Gru"
video: false
vote_average: 7.8
vote_count: 270


*/