import React from 'react'
import '../stylesheets/About.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(){
    return (
        <>
        <Container id='About'>
            <Row>
                <Col>
                    <h1>About Me</h1>
                </Col>
            </Row>

        </Container>
        </>
    )
}

export default About