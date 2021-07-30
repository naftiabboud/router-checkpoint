import React from 'react';
import { Card } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom'
function MovieCard(film) {
    return (
        
            <Card style={{ width: '300px', height:'700px' }}>
               
                <Card.Img variant="top" src={film.posterURL} />
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>{film.title}</Card.Title>
                    <Card.Text style={{ color: 'black' }}>
                     {film.description}
                    </Card.Text>
                    <ReactStars
                        count={5}
                        value={film.rate}
                        edit={false}
                        // onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                   
                </Card.Body>
                <Link to={{pathname:"/trailer",film:film}}>see More</Link>
            </Card>
       
    )
}

export default MovieCard;
