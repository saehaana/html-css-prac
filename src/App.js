import React, {useState, useEffect} from 'react';
import './App.css';

import PacmanLoader from "react-spinners/PacmanLoader";

const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3500)
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
        </div>}
    </div>
    );
}

export default App;