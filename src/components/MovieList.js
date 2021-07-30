import React from 'react'
import { useState } from 'react';
import MovieCard from './MovieCard';
import MovieFilter from './MovieFilter';

function MovieList({ films }) {
    const [text, setText] = useState('')
    const [rate, setRate] = useState('')
    const filterText=(text)=>{
setText(text)
    }
    const filterRate=(rate)=>{
        setRate(rate)
            }
    
    return (
        <div>
            <MovieFilter filterText={filterText} filterRate={filterRate}/>

            <div className="container">

                {films.filter(el=>el.title.toLowerCase().includes(text.toLowerCase())&& el.rate>=rate).map(el => <MovieCard film={el} />)}
            </div>
        </div >
    )
}

export default MovieList;
