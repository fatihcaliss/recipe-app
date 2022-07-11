import React from 'react'
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa';
import contactStyle from "./contact.module.css";


const Contact = () => {
    return (
        <div className={contactStyle['icons']}>
            <div className={contactStyle['icon']}><a href="https://www.linkedin.com/in/fatihcaliss/"><FaLinkedinIn size={50} /></a> </div>
            <div className={contactStyle['icon']}><a href="https://github.com/fatihcaliss"><FaGithub size={50} /></a></div>
            <div className={contactStyle['icon']}><a href="mailto:fthcls@gmail.com"><FaRegEnvelope size={50} /></a></div>
        </div>
    )
}

export default Contact