import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Footer.css'

function Footer() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <p className='FooterText'>
                        Questions? Feature Requests? Need to report a bug? Contact me on <a href="https://github.com/alexbondf1" target="_blank" rel="noopener noreferrer">GitHub</a>.<br/>
                        Movie Knight by <a href="http://alexbondf1.github.io" target="_blank" rel="noopener noreferrer">Alex aka Ufufu</a>. Source code is licensed by <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. Website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY NC SA 4.0</a>.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer