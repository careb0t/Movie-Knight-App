import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './SuggestionBox.css'

function SuggestionBox(props) {
    if (props.suggestionOpened === []) return

    return(
        <Container className="SuggestionBoxContainer">
            <Row>
                <Col md="4">
                    <img className="SuggestionBoxPoster" src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + props.suggestionOpened.poster_path}/>
                </Col>
                <Col md="8">
                    <span>{props.suggestionOpened.title}</span>
                    <span>{props.suggestionOpened.release_date}</span>
                    <span>{props.suggestionOpened.vote_count}</span>
                    <span>{props.suggestionOpened.vote_average}</span>
                </Col>
            </Row>
        </Container>
    )
}

export default SuggestionBox