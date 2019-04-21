import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import './MovieItem.css'
const Moment = require('moment')

function MovieItem(props) {
    let newDate = Moment(props.movie.year, 'YYYY/MM/DD').format('MMMM Do YYYY')

    return (
        <Col sm="12" md="4" className="MovieItemContainer">
            <div className="mr-1 ml-1">
               <img src={props.movie.poster} alt="" className="MoviePoster"/>
                <h5>{props.movie.title}</h5>
                <Container fluid>
                    <Row>
                        <Col md="12" className="MovieItemPlot">
                            <span>{props.movie.plot}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <h6>Release📅:<br/></h6>
                            <span>{newDate}</span>
                        </Col>
                        <Col md="4">
                            <h6>Rating🏆:<br/></h6>
                            <span>{props.movie.ratings}</span>
                        </Col>
                        <Col md="4">
                            <h6>TMDB:<br/></h6>
                            <span><a href={props.movie.link}>Click here</a></span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Col>  
    )
}

export default MovieItem