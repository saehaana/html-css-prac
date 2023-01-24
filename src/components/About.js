import React from 'react'
import '../stylesheets/About.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { motion } from "framer-motion";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

function About(){
    return (
        <>
        <Container id='About'>
            <Row>
                <Col>
                    <motion.h1 
                    className='about-title'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: .75}}
                    viewport={{ once: true }}
                    >About Me
                    </motion.h1>
                </Col>
            </Row>

            <br></br><br></br>

            <Row>
                <Col className='background'>
                    <p>Growing up, I was always playing around with computers 
                    and whenever a software issue arose I didn't stop until the conflict was resolved!
                    This drive ultimately led me to make a career out of it.
                    </p>
                </Col>

                <Col>
                    <Timeline position='left' className='timeline'>
                        <TimelineItem>
                            <TimelineOppositeContent>Ran my first "Hello World" in Java</TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>Aug 2019</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                    <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>2</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                    <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>3</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>Graduated from Virginia Commonwealth University</TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                    <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>May 2022</TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Col>

                <Col xs={12} className='tech-stack-box'>
                <br></br><br></br>
                <p>Tech Stack</p>
                <br></br><br></br>
                <p>Backend - Java, Python, C, MySQL, PHP</p>
                <p>Frontend - HTML, CSS, JavaScript</p>
                <p>Frameworks - React, Bootstrap, Mockito, jUnit, pytest, unittest</p>
                <p>Management Tools/Other - Git, GitHub, CI/CD, AWS EC2, JSON, XML</p>
                </Col>
            </Row>

        </Container>
        </>
    )
}

export default About