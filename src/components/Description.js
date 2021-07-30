import React from 'react'
import {Link} from 'react-router-dom'
function Description(props) {
   const {film}=props.location
    return (
        <div>
            <h1>description</h1>
            <h2>{film.title}</h2>
            <img src={film.posterURL} alt="movie pic"/>
            <h3>{film.description}</h3>
            <iframe width="560" height="315" src={film.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Description
