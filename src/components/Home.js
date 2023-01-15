import React, { useState } from 'react';
import '../stylesheets/Home.css';

import{ Link } from 'react-router-dom'

import{ motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => setIsOn(!isOn);
    
    return ( 
    <>
    <div className= "home-container">
    <div className="navbox">
        <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
        </div>
        <h1 className = "name">Ausawin Saehaan</h1>
        <p className = "title">Software Developer</p>
        <ul className = "navlist">
            <motion.li 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1, delay: .25}}
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
    <div className = "message-box">
        <p className = "message">
            Welcome. <br></br> <br></br>
            I'm a full-stack engineer from the Northern Virginia area. My desires are to innovate modern design and bring clean functionality. 
        </p>
        <motion.div 
        className = "resume"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: .75}}
        > 
            <a href="/Saehaan A. Resume.pdf" target="_blank">Resume</a>
        </motion.div>
    </div>
    
    <ul className = "iconlist">
        <motion.li
            className = "github" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: .25}}
        >        
            <a href="https://github.com/saehaana" target="_blank" rel="noreferrer">
                <FontAwesomeIcon inverse icon= {faGithub} />
            </a>
        </motion.li>
        <motion.li 
            className = "linkedin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: .5}}
        > 
        <a href="https://www.linkedin.com/in/saehaana/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon inverse icon= {faLinkedin} />
        </a>
        </motion.li>
    </ul>
    </div>
    </> 
    );
    
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
  
export default Home;