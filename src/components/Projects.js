import React from 'react'
import '../stylesheets/Projects.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { motion } from "framer-motion";

function Projects(){
    return (
        <>
        <Container id='Projects'>
            <Row>
                <Col>
                    <motion.h1 
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: .75}}
                     viewport={{ once: true }}
                    >My Work</motion.h1>
                </Col>
            </Row>

        </Container>
        </>
    )
}

export default Projects