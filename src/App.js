import React, {useState, useEffect} from 'react';
import './stylesheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import{Link, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import PacmanLoader from "react-spinners/PacmanLoader";
import { motion } from "framer-motion";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    <Container fluid className = "preloader">
    { loading ? 
            (
            <>
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
            </>
            ) 
        :
        <>
        <div className="home-container">
        <Link to="/">
            <h1 className='name'>Ausawin Saehaan</h1> 
            <p className='title'>Software Developer</p>
        </Link>
        <ul className = "navbar">
            <motion.li className="nav-projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: .25}}
            >
                <Link to="/Projects">Projects</Link>
            </motion.li>
            <motion.li className='nav-about'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 , delay: .5}}
            >
                <Link to="/About">About</Link>
            </motion.li>
            <motion.li className='nav-contact'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: .75}}
            >
                <Link to="/Contact">Contact</Link>
            </motion.li>
        </ul>
        
        <motion.div 
            className="switch-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1, delay: 1.25}}
        >
            <p className="switch-text">Dark | Light</p>
            <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
                    <motion.div className="handle" layout transition={spring} />
            </div>
        </motion.div>

        </div> 
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
    </Container>
    </>
    );

}
const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

export default App