import React from 'react'
import './VideoContainer.css'
import { Container, Row, Col } from 'reactstrap'

function VideoContainer() {
    return (
        <Container className="VideoContainer">
            <Row>
                <Col>
                    <video autoPlay loop muted className="embed-responsive embed-response-item">
                        <source src='./src/client/App/Assets/example.mp4' type='video/mp4'/>
                    </video>
                </Col>
            </Row>
        </Container>
    )
}

export default VideoContainer