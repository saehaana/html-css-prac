import React from 'react'
import '../stylesheets/Contact.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Contact(){
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
    setOpen(true);
    };

    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    };

    const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}></Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
    );

    return (
        <>
        <Container id='Contact'>
            <Row>
                <Col>
                    <motion.h1 
                     className='contact-title'
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: .75}}
                     viewport={{ once: true }}
                    >Get In Touch</motion.h1>
                </Col>
            </Row>

            <Row>
                <Col>
                <Box
                component="form" 
                sx={{'& > :not(style)': { m: 1, width: '25ch' },}} 
                noValidate autoComplete="off">
                
                <TextField id="outlined-basic" label="First Name" variant="outlined" 
                InputLabelProps={{style: { color: '#fff', fontFamily:'monospace' } }}/>
                <TextField id="outlined-basic" label="Last Name" variant="outlined" 
                InputLabelProps={{style: { color: '#fff', fontFamily:'monospace' } }}/>
                <TextField id="outlined-basic" label="Email" variant="outlined" color="warning" required
                InputLabelProps={{style: { color: '#fff', fontFamily:'monospace' } }}/>
                </Box>
                </Col>
                <Col xs={12}>
                <TextField id="outlined-multiline-static" label="Message" multiline rows={4} fullWidth
                InputLabelProps={{style: { color: '#fff', fontFamily:'monospace' } }}/>
                </Col>
            </Row>
            
            <br></br>
            <div>
            <Button onClick={handleClick} variant="contained">Send</Button>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Email Sent"
                action={action}/>
            </div>
        </Container>
        
        <Container className='col align-self-end'>
            <Row>
                <Col>
                    <ul className = "nav justify-content-center">
                        <motion.li
                         className = "nav-item" 
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ duration: .75}}
                         viewport={{ once: true }}>        
                            <a href="https://github.com/saehaana" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon inverse icon= {faGithub} size="3x"/>
                            </a>
                        </motion.li>
                        <motion.li 
                            className = "nav-item"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: .75}}
                            viewport={{ once: true }}
                        > 
                        <a href="https://www.linkedin.com/in/saehaana/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon inverse icon= {faLinkedin} size="3x"/>
                        </a>
                        </motion.li>
                    </ul>
                    <p className='copyright'>
                        Built and Designed by Ausawin Saehaan
                        <br></br>
                        &copy; Copyright 2023. All Rights Reserved
                    </p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Contact