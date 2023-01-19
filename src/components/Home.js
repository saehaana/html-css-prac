import React from 'react';
import{ Link } from 'react-router-dom'
import '../stylesheets/Home.css';
import{ motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faDownload, faMouse } from '@fortawesome/free-solid-svg-icons';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return ( 
    <>
    <Container className='home-container'>
        <Row className='message-box-row'>
            <Col xs={12} className="message-box">
                <motion.p 
                className = "message" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.25}}
                >
                Welcome. <br></br> <br></br>
                I'm a full-stack engineer from the Northern Virginia area. My desires are to innovate modern design and bring clean functionality. 
                </motion.p>
            </Col>
            <Col xs={12} className="contact-box">
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5}}
                >
                <Button variant="primary" as={Link} to='/Contact'>Contact Me</Button>{''}
                </motion.div>   
            </Col>
        </Row>
        
        <Row className='mouse-row'>
            <Col xs={12} className="mouse-icon-box">
                <div className='mouse'>
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2}}>
                <FontAwesomeIcon icon={faMouse} size="2x"/>
                <FontAwesomeIcon icon={faArrowDown} beat size="2x" id='arrow-down'/>
                </motion.div>
                </div>     
            </Col>
        </Row>
    </Container>
    </> 
    );
}

export default Home;