import React from 'react';
import { useParams } from 'react-router-dom';

export default function Error(){

    const {error} = useParams();

    return(
        error
    ) 
}