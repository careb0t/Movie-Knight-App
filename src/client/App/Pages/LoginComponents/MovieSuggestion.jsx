import React from 'react'
import './MovieSuggestion.css'
import { Row, Col } from 'reactstrap'


function MovieSuggestion(props) {
    function checkYear(){
        if (props.result.release_date.length === 0 ) return
        return "(" + props.result.release_date.slice(0, 4) + ")"
    }
    return (
        <Row className="SuggestionEntry"  onClick={props.openSuggestion.bind(this, props.result.id)}>
            <Col md="1">
                <img className="SuggestionPoster" src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + props.result.poster_path} alt="Poster N/A"/>
            </Col>
            <Col md="8">
                <span className="SuggestionTitle">{props.result.title} {checkYear()}</span><br/>
            </Col> 
            <Col md="3">
                <span className="SuggestionRating"> Votes👨‍👩‍👧‍👦: {props.result.vote_count}</span><br/><span className="SuggestionRating">Rating🏆: {props.result.vote_average}</span>
            </Col>   
        </Row>
    )
}

export default MovieSuggestion