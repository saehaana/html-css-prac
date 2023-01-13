import React, {useState, useEffect} from 'react';
import './App.css';

import{Link, Route, Routes} from 'react-router-dom'

import About from './components/About'
import Projects from './components/Projects'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PacmanLoader from "react-spinners/PacmanLoader";

const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
    <div className ="main-container">
        
        { loading ? (<PacmanLoader size = {30} color = {"rgba(255, 255, 255, 1)"} loading={loading} />) 
        :
        <div className = "preloader">
        <div className = "main-container-background">
            <img src={"./assets/indexBackground.jpg"} alt="Page Background"/>
        </div>
        <h1 className = "name">Ausawin Saehaan</h1>
        <p className = "title">Software Developer</p>
        <ul className = "navbar">
            <li><a href="https://saehaana.github.io/projects.html">Projects</a></li>
            <li><a href="https://saehaana.github.io/about.html">About</a></li>
            <li><a href="mailto:saehaana@gmail.com">Contact</a></li>
        </ul>
        <div className = "message-box">
            <p className = "message">
                Welcome. <br></br> <br></br>
                I'm a full-stack engineer from the Northern Virginia area. My desires are to innovate modern design and bring clean functionality. 
            </p>
        </div>
        <div className = "github">  
            <a href="https://github.com/saehaana" target="_blank" rel="noreferrer">
                <FontAwesomeIcon inverse icon= {faGithub} />
            </a>
        </div>
        <div className = "linkedin"> 
        <a href="https://www.linkedin.com/in/saehaana/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon inverse icon= {faLinkedin} />
        </a>
        </div>
        <div className = "resume">
            <a href="/Saehaan A. Resume.pdf" target="_blank">Resume</a>
        </div>
        {/* 
        <Routes>
            <Route path = "./components/About" element={<About />} />
            <Route path = "./components/Projects" element={<Projects/>} />
        </Routes>
        */} 
        </div>}
    </div>
    );
}

export default App;