import React, {useState, useEffect} from 'react';
import './stylesheets/App.css';

import{Link, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

import PacmanLoader from "react-spinners/PacmanLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { motion } from "framer-motion";

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
    <div className='parallax'></div>
    <div className = "preloader">
    { loading ? 
            (
            <>
            <PacmanLoader size = {30} color = {"rgba(255, 255, 255, 1)"} loading={loading} />
            <div className = "text-container">
                <motion.h1      
                    className = "preloader-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5}}>
                    Portfolio
                </motion.h1>
                <motion.h1 
                    className = "preloader-linebreak"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1}}>
                    ||
                </motion.h1> 
                <motion.h1 
                    className = "preloader-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1}}>
                    Ausawin Saehaan
                </motion.h1>
            </div>
            </>
            ) 
        :
        <>
        
        <div className="main-container">
        <div className="navbox"> 
            <Link to="/" className='homeLink'>
                <h1 className='name'>Ausawin Saehaan</h1> 
                <p className='title'>Software Developer</p>
            </Link>
            <ul className = "navlist">
                <motion.li 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: .25}}
                >
                    <Link to="/Projects">Projects</Link>
                </motion.li>
                <motion.li 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 , delay: .5}}
                >
                    <Link to="/About" id="about">About</Link>
                </motion.li>
                <motion.li 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: .75}}
                >
                    <a href="mailto:saehaana@gmail.com">Contact</a>
                </motion.li>
            </ul>
        </div>
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
        </Routes>
        } 
        
        </>
    }  
    </div>
    <div class="parallax"></div>
    </>
    );

}
const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

export default App