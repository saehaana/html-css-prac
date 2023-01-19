import React from 'react'
import '../stylesheets/Contact.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";

function Contact(){
    return (
        <>
        <Container id='Contact'>
            <Row>
                <Col>
                    <h1>Contact</h1>
                </Col>
            </Row>
        <div className='footer'> 
        <a href="mailto:saehaana@gmail.com">Contact</a>
        <ul className = "iconlist">
            <motion.li
                className = "github" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: .75}}
            >        
                <a href="https://github.com/saehaana" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon inverse icon= {faGithub} size="3x"/>
                </a>
            </motion.li>
            <motion.li 
                className = "linkedin"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: .75}}
            > 
            <a href="https://www.linkedin.com/in/saehaana/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon inverse icon= {faLinkedin} size="3x"/>
            </a>
            </motion.li>
        </ul>
        </div>

        </Container>
        </>
    )
}

export default Contact