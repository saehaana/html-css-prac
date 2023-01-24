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
                    <motion.h1 
                     className='contact-title'
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: .75}}
                     viewport={{ once: true }}
                    >Get In Touch</motion.h1>

                    <motion.p>Send me a message</motion.p>
                    <a href="mailto:saehaana@gmail.com">Email</a>
                </Col>
            </Row>

        </Container>
        <Container className='col align-self-end'>
            <Row>
                <Col>
                    <ul className = "nav justify-content-center">
                        <motion.li
                         className = "nav-item" 
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ duration: .75}}
                         viewport={{ once: true }}>        
                            <a href="https://github.com/saehaana" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon inverse icon= {faGithub} size="3x"/>
                            </a>
                        </motion.li>
                        <motion.li 
                            className = "nav-item"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: .75}}
                            viewport={{ once: true }}
                        > 
                        <a href="https://www.linkedin.com/in/saehaana/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon inverse icon= {faLinkedin} size="3x"/>
                        </a>
                        </motion.li>
                    </ul>
                    <p className='copyright'>
                        Built and Designed by Ausawin Saehaan
                        <br></br>
                        &copy; Copyright 2023. All Rights Reserved
                    </p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Contact