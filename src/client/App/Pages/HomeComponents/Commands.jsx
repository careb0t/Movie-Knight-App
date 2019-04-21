import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Commands.css'

function Commands() {
    return (
        <Container className="CommandsContainer" fluid>
            <Row>
                <Col>
                    <h2 className="Commands">Commands</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <p>Command</p>
                                </th>
                                <th>
                                    <p>Description</p>
                                </th>
                            </tr>   
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p><b>~setup</b></p>
                                </td>
                                <td>
                                    <p>Displays setup instructions<br/>(Note: Only the owner can use the ~setup and other setup related commands)</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>~help</b></p>
                                </td>
                                <td>
                                    <p>Displays list of user and moderator commands</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>~addMovieRole</b></p>
                                </td>
                                <td>
                                    <p>Gives user movie roles</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>~removeMovieRole</b></p>
                                </td>
                                <td>
                                    <p>Removes movie role from user</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>~addMovie [title] // [year]</b></p>
                                </td>
                                <td>
                                    <p><i>Ex: ~addMove Shrek</i><br/><i>Ex: ~addMovie Shrek // 2001</i><br/>Adds movie to the server list<br/>(Note: Year is optional but will ensure the proper movie is chosen from TMDB)</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>~removeMovie [title] // [year]</b></p>
                                </td>
                                <td>
                                    <p><i>Ex: ~removeMove Shrek</i><br/><i>Ex: ~removeMovie Shrek // 2001</i><br/>Removes movie to the server list<br/>(Note: Year is optional but will ensure the proper movie is chosen from TMDB)</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>~aboutMovie [title] // [year]</b></p>
                                </td>
                                <td>
                                    <p><i>Ex: ~aboutMove Shrek</i><br/><i>Ex: ~aboutMovie Shrek // 2001</i><br/>Displays information about chosen movie such ass year of release, ratings, and a link to the movies TMDB page<br/>(Note: Year is optional but will ensure the proper movie is chosen from TMDB)</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>~createMoviePoll</b></p>
                                </td>
                                <td>
                                    <p>Randomly selects 3 movies form the server list and creates a reaction poll on the chosen movies<br/>(Note: Only the server owner or movie night moderators can use this command)</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>~clearMovieList</b></p>
                                </td>
                                <td>
                                    <p>Clears the movie list for the server. This cannot be undone. Use carefully!<br/>(Note: Only the server owner or movie night moderators can use this command)</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    )
}

export default Commands