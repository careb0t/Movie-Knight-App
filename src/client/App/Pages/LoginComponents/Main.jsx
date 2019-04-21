import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Main.css'
import GuildInfo from './GuildInfo'
import MovieList from './MovieList'
import SuggestionBox from './SuggestionBox'

function Main(props) {
    if (Object.keys(props.guildOpened).length === 0) {
        return (
            <Container fluid className="NoGuild">
                <span>Select a server above to get started!</span>
            </Container> 
        )
    }
    return (
        <Container fluid className="MainContainer">
            <Row className="MainContainerRow">
                <Col md="2" className="GuildGridContainer">
                    <GuildInfo guildOpened={props.guildOpened}/>
                </Col>
                <Col md="10" className="MovieListContainer">
                    <MovieList query={props.query} guildOpened={props.guildOpened} activateSearchBar={props.activateSearchBar} searchBarActive={props.searchBarActive} getQueryInfo={props.getQueryInfo} querySuggestions={props.querySuggestions} openSuggestion={props.openSuggestion} suggestionOpened={props.suggestionOpened} closeSuggestion={props.closeSuggestion} alert={props.alert} closeAlert={props.closeAlert} putSuggestion={props.putSuggestion}/>
                </Col>    
            </Row>
        </Container>
    )
}

export default Main