import React from 'react';
import {useParams} from 'react-router-dom';
import './styles.css';

import {DetailsMovie} from '../../components/detailsMovie';
import {useDetails} from '../../hooks/useDetails';

export const Details = () => { 
  const {id} = useParams();
  const details = useDetails(id);

  return (
    <div className='containerDetails'>
        <h1>Details</h1>
        <DetailsMovie details={details} />
    </div>
  );
};