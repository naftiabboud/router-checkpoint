import React from 'react'
import MovieList from './MovieList';
import {Route,Switch} from 'react-router-dom'
function Home(){
    return(
<div style={{width:'100%'}}>
    <MovieList/>
</div>
    )
}
export default Home;