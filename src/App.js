import React, {useState, useEffect} from 'react';
import './stylesheets/App.css';

import{Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

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
    <>
    <div className = "preloader">
    { loading ? 
            (
            <>
            <PacmanLoader size = {30} color = {"rgba(255, 255, 255, 1)"} loading={loading} />
            <h1 className = "preloader-title"> Ausawin Saehaan | Portfolio</h1> 
            </>
            ) 
        :
      
        <div className = "main-container"> 
        { 
        <Routes>
        <Route path = "/" element={<Home/>}/> 
        <Route path = "/About" element={<About/>} />
        <Route path = "/Projects" element={<Projects/>} />
        </Routes>
        } 
        </div>
    }
    </div>
    </>
    );
}

export default App