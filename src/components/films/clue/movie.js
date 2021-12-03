import React, { useState } from "react";
import {
    Container,
    Row,
    Col
   } from "react-bootstrap";
   import moviePoster from './poster.jpg';
   import Reviews from './reviews';


   const Movie = () => {

    return (
        
        <Container fluid>
        <Container fluid className="movie-banner">
        <Container id="clue-banner">
      <Container className="jumbotron">
        <h1>Clue</h1>
      </Container>
    </Container>
    </Container>
    <Container fluid className="metadata-container">
        <Container className="metadata">
        <Row>
            <Col sm><p>1985 • PG • 1h 34m</p>
            </Col>
            <Col sm><p>Comedy, Crime, Mystery</p>
            </Col>
            <Col sm><p>Director: Jonathan Lynn</p>
            </Col>
            <Col sm><p>Writers: John Landis, Jonathan Lynn</p>
            </Col>
        </Row>
        </Container>
    </Container>
    <Container className="main-content">
        <Row>
            <Col md={3}>
            <img class="poster" src={moviePoster}></img>
            <h4>Starring</h4>
            <p><p>Eileen Brennan, Tim Curry, Madeline Kahn, Christopher Lloyd, Michael McKean, Martin Mull, Lesley Ann Warren</p></p>
            </Col>
            <Col md={9}>
                <div className="p-4">
                <p class="tagline">Seven suspects, six weapons, five bodies and three endings.</p>
<p>Clue finds six colorful dinner guests gathered at the mansion of their host, Mr. Boddy – who turns up dead after his secret is exposed: He was blackmailing all of them. With the killer among them, the guests and Boddy’s chatty butler must suss out the culprit before the body count rises.</p>
<p>Inspired by the nature of the board game, the film's initial release featured various different endings, with one of three possibilities sent to movie theaters at the time. Home media releases include all three endings presented sequentially. The film initially received mixed reviews but later developed a considerable cult following.</p>
&nbsp;
<Reviews />
</div>
            </Col>
        

        </Row>

    </Container>
    </Container>
  
    );
   };

export default Movie;