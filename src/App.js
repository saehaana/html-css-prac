import React, {useState, useEffect} from 'react';
import './stylesheets/App.css';

import{Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

import PacmanLoader from "react-spinners/PacmanLoader";
import { motion } from "framer-motion";

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
            <motion.h1      
                className = "preloader-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2}}>
                Ausawin Saehaan
            </motion.h1>
            <h1 className = "preloader-linebreak">|</h1> 
            <motion.h1 
                className = "preloader-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2, delay: 0.6}}>
                Portfolio
            </motion.h1> 
            </>
            ) 
        :
      
        <motion.div 
            className = "main-container" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}> 
        { 
        <Routes>
        <Route path = "/" element={<Home/>}/> 
        <Route path = "/About" element={<About/>} />
        <Route path = "/Projects" element={<Projects/>} />
        </Routes>
        } 
        </motion.div>
    }
    </div>
    </>
    );
}

export default App