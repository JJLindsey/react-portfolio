import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsEnvelope } from 'react-icons/bs'

const Footer = () => {
    return (
        <div id='footer'>
                <a href='https://github.com/JJLindsey' target='_blank' rel='noopener noreferrer' alt='GitHub profile link'>
                    <FaGithub/>
                </a>
                <a href='https://www.linkedin.com/in/jennifer-lindsey010' target='_blank' rel='noopener noreferrer' alt='Linked In profile link'>
                    <FaLinkedinIn/>
                </a>
                <a href='mailto:jlindsey010@gmail.com' target='_blank' rel='noopener noreferrer' alt='email link'>
                    <BsEnvelope/>
                </a>
        </div>
    )
}

export default Footer
