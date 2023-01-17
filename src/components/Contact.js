import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";

function Contact(){
    return (
        <>
        <h1>Contact Me</h1>
        <div className='footer'> 
        <a href="mailto:saehaana@gmail.com">Contact</a>
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
        </div>
        </>
    )
}

export default Contact