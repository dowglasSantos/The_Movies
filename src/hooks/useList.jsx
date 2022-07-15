import { useState, useEffect } from "react"; 
import {APIKey} from '../config/APIKey';

export const useList = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(response => setMovies(response.results));
    });

    return movies;
};
