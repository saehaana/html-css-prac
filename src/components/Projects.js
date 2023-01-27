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
                     className='projects-title'
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: .5}}
                     viewport={{ once: true }}
                    >My Work</motion.h1>
                </Col>
            </Row>

            <br></br><br></br>
            
            <Row>
                <Col>
                <table className='table'>
                <motion.tr
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}>
                    <td>VCU Course Override Request Management System</td>
                </motion.tr>
                <motion.tr
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}>
                    <td>Word Sense Disambiguator</td>
                </motion.tr>
                <motion.tr
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}>
                    <td>Valorant Match Tracker</td>
                </motion.tr>
                </table>
                </Col>
                <Col>
                    *image appears on mouseover
                </Col>
            </Row>

        </Container>
        </>
    )
}

export default Projects