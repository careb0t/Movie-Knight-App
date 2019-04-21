import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import './About.css'

function About() {
    return (
        <Container className="TaglineContainer">
            <Row>
                <Col sm="12">
                    <h4 className="Tagline">MovieKnight is a Discord bot and web app companion for communities that watch movies together, powered by the MERN stack, Discord.js and the TMBD API.</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4 className="FeatureName">Roles</h4>
                    <hr/>
                    <p className="FeatureDesc">Users can give themselves movie night roles for notifications and polls</p>
                </Col>
                <Col>
                    <h4 className="FeatureName">Movie List</h4>
                    <hr/>
                    <p className="FeatureDesc">Keep track of movies members want to watch with an automated list system</p>
                </Col>
                <Col>
                    <h4 className="FeatureName">Movie Polls</h4>
                    <hr/>
                    <p className="FeatureDesc">Users can give themselves movie night roles for notifications and polls</p>
                </Col>
            </Row>
        </Container>
    )
}

export default About