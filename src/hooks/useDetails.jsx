import { useState, useEffect } from "react"; 
import {APIKey} from '../config/APIKey';

export const useDetails = (id) => {
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
        .then(resp => resp.json())
        .then(resp => setMovie(resp));
    });

    return movie;
};
