import React, {useState, useEffect} from 'react';
import{Link, NavLink, Route, Routes} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import { motion } from "framer-motion";
import PacmanLoader from "react-spinners/PacmanLoader";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => setIsOn(!isOn);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
    <>
    
    { loading ? 
            (
            <>
            <Container fluid className = "preloader">
            <Row className="pacman">
                <Col>
                <PacmanLoader size = {30} color = {"rgba(255, 255, 255, 1)"} loading={loading} />
                </Col>
            </Row>
            <Row className = "pretext-container">
                <Col xs={5}>
                <motion.h1      
                    className = "preloader-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5}}>
                    Portfolio
                </motion.h1>
                </Col>
                <Col xs={2}>
                <motion.h1 
                    className = "preloader-linebreak"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1}}>
                    ||
                </motion.h1> 
                </Col>
                <Col xs={5}>
                <motion.h1 
                    className = "preloader-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1}}>
                    Ausawin Saehaan
                </motion.h1>
                </Col>
            </Row>
            </Container>
            </>
            ) 
        :
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>Ausawin Saehaan</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: .25}}>
                            <Nav.Link as={NavLink} to='/Projects'>Projects</Nav.Link>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: .5}}>
                            <Nav.Link as={NavLink} to='/About'>About</Nav.Link>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: .75}}>
                            <Nav.Link as={NavLink} to='/Contact'>Contact</Nav.Link>
                        </motion.div>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        { 
        <Routes>
        <Route path = "/" element={<Home/>} /> 
        <Route path = "/About" element={<About/>} />
        <Route path = "/Projects" element={<Projects/>} />
        <Route path = "/Contact" element={<Contact/>} />
        </Routes>
        } 
        </>
    }  
    </>
    );

}
const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

export default App