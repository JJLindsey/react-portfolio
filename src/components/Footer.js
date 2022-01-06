import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsEnvelope } from 'react-icons/bs'
import './footer.css'

const Footer = () => {
    return (
        <div className ="footer-container" id='socicon'>
            <small class='website-rights'>Jennifer Lindsey © 2022</small>
            <section className="footer-info">
                <a className='soc-icons' href='https://github.com/JJLindsey' target='_blank' rel='noopener noreferrer' alt='GitHub profile link'>
                    <FaGithub/>
                </a>
                <a className='soc-icons' href='https://www.linkedin.com/in/jennifer-lindsey010' target='_blank' rel='noopener noreferrer' alt='Linked In profile link'>
                    <FaLinkedinIn/>
                </a>
                <a className='soc-icons' href='mailto:jlindsey010@gmail.com' target='_blank' rel='noopener noreferrer' alt='email link'>
                    <BsEnvelope/>
                </a>
            </section>
        </div>
    )
}

export default Footer
