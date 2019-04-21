import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import './MovieList.css'
import MovieItem from './MovieItem'
import MovieSuggestion from './MovieSuggestion'
import AlertBox from './AlertBox'
const Moment = require('moment')

function MovieList(props) {
    let Movies = props.guildOpened.request_list.map(movie => {
        return <MovieItem key={movie.link} movie={movie}/>
    })
    function checkSuggestions() {
        if (props.querySuggestions.results !== undefined && props.querySuggestions.total_results > 0 && Object.keys(props.suggestionOpened).length <= 0){
            let Suggestions = props.querySuggestions.results.map(result =>{
                if (props.query.length == 0) {
                    return
                }
                else {
                    return (
                        <MovieSuggestion key={result.id} result={result} openSuggestion={props.openSuggestion}/>
                    )
                }
            })
            return Suggestions
        }
        if (props.querySuggestions.total_results == 0 && Object.keys(props.suggestionOpened).length <= 0) {
            return <span className="NoneFound">Nothing found</span>
        }
        if (Object.keys(props.suggestionOpened).length > 0) {
            let newDate = Moment(props.suggestionOpened.release_date, 'YYYY/MM/DD').format('MMMM Do YYYY')
            return (
                <Row className="ActiveSuggestionContainer">
                    <Col md="4">
                        <img className="ActiveSuggestionPoster" src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + props.suggestionOpened.poster_path}/>
                    </Col>
                    <Col md="8">
                        <Row>
                            <Col className="ActiveSuggestionTitleContainer">
                                <span className="ActiveSuggestionTitle">{props.suggestionOpened.title} ({props.suggestionOpened.release_date.slice(0, 4)})</span> <a className="CloseSuggestion" onClick={props.closeSuggestion}>❌</a>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="ActiveSuggestionDetailContainer">
                                <span className="ActiveSuggestionHeader">Release Date📅</span><br/>
                                <span>{newDate}</span>
                            </Col>
                            <Col className="ActiveSuggestionDetailContainer">
                                <span className="ActiveSuggestionHeader">Runtime⌛</span><br/>
                                <span>{props.suggestionOpened.runtime} minutes</span>
                            </Col>
                            <Col className="ActiveSuggestionDetailContainer">
                                <span className="ActiveSuggestionHeader">Ratings🏆</span><br/>
                                <span>{props.suggestionOpened.vote_average}</span>
                            </Col>
                        </Row>
                        <Row className="ActiveSuggestionOverviewContainer">
                            <Col>
                                <span>{props.suggestionOpened.overview}</span>
                            </Col>    
                        </Row>
                        <Row>
                            <Col className="SuggestionButtonContainer">
                                <a href={`https://www.themoviedb.org/movie/${props.suggestionOpened.id}`} target="_blank"><Button>View on TMDB</Button></a>
                            </Col>
                            <Col className="SuggestionButtonContainer">
                                <Button onClick={props.putSuggestion}>Add to movie list</Button>
                            </Col>
                        </Row> 
                    </Col>
                </Row>
            )
        }
    }

    let searchBar = React.createRef()

    function scrollToScrollBar() {
        searchBar.current.scrollIntoView({behavior: "smooth", block: "end"})
        props.activateSearchBar()
    }

    return (
        <div className="MovieListMainContent">
            <AlertBox alert={props.alert} closeAlert={props.closeAlert}/>
            <input type="text" placeholder="Search for a movie to add to the list!" ref={searchBar} className={props.searchBarActive === true ? "MovieListSearchbarActive" : "MovieListSearchbar"} onChange={props.getQueryInfo} onClick={props.closeSuggestion}/><br/>
            <Container className={props.query.length == 0 ? "" : "SuggestionContainer"}>
                {checkSuggestions()}
            </Container>
            <Container fluid className="ListedMoviesContainer">
                <Row>
                    {Movies}
                    <Col md="4" className="MoviePlaceholderContainer">
                        <div className="MoviePlaceholder" onClick={scrollToScrollBar}>
                            <span className="PlaceholderIcon">🔎</span><br/>
                            <span className="PlaceholderText">Search for a new movie</span>
                        </div>
                    </Col>               
                </Row>
            </Container>
        </div>
    )
}

export default MovieList