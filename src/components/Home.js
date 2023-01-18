import React from 'react';
import '../stylesheets/Home.css';
import{ motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faDownload, faMouse } from '@fortawesome/free-solid-svg-icons';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return ( 
    <>
    <Container className='home-container'>
        <Row>
            <Col className="message-box">
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2}}>
                <FontAwesomeIcon icon={faMouse} size="2x" id='mouse'/>
                <FontAwesomeIcon icon={faArrowDown} beat size="2x" id='arrow-down'/>
                </motion.div>
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
        </Row>
    {/*
    <div className = "message-box">
        <motion.p 
            className = "message" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.25}}
        >
            Welcome. <br></br> <br></br>
            I'm a full-stack engineer from the Northern Virginia area. My desires are to innovate modern design and bring clean functionality. 
        </motion.p>
        <motion.div 
            className = "resume"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5}}
        >
            Resume 
        </motion.div>
        <motion.a 
            href="/Saehaan A. Resume.pdf" 
            target="_blank"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5}}
        >
            <motion.div whileHover={{ scale: 1.2}} className='download'>
                <FontAwesomeIcon icon={faDownload} size="2x"/>
            </motion.div>
        </motion.a>
    </div>*/}
    </Container>
    </> 
    );
}

export default Home;