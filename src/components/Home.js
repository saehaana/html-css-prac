import React from 'react';
import '../stylesheets/Home.css';
import{ motion } from "framer-motion"

const Home = () => {
    return ( 
    <>
        <div className = "message-box">
            <motion.p 
                className = "message" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.25}}
            >
                Welcome. <br></br> <br></br>
                I'm a full-stack engineer from the Northern Virginia area. My desires are to innovate modern design and bring clean functionality. 
            </motion.p>
            <motion.div 
                className = "resume"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5}}
            > 
                <a href="/Saehaan A. Resume.pdf" target="_blank">Resume</a>
            </motion.div>
        </div>
    </> 
    );
}

export default Home;