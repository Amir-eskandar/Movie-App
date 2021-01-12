import React from 'react'
import { Card, Col } from 'react-bootstrap'


const MoviesList = ({movies, AddToMyFavourites, handleFavourites}) => {
    return (
        <>
           {movies.map(movie =>(
               <Col  className='image-container d-flex jistify-content-start my-3'key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
                   <Card className="card ">
                    <Card.Img variant="top" src={movie.Poster} className='movie-image' />
                    <Card.Body>
                        <Card.Title>{movie.Title}</Card.Title>
                        <Card.Text>{movie.Year}</Card.Text>
                    </Card.Body>
                    <div
                     className='overlay d-flex align-items-center justify-content-center'
                     onClick={() => handleFavourites(movie)}
                     >
                    <AddToMyFavourites />
                    </div>
                    </Card>
               </Col>
           ))} 
        </>
    )
}

export default MoviesList;
