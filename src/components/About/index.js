import React from 'react'
import profileImg from '../../assets/cartoonJenn2.jpg'


function About() {
    return (
        <div id='about'>
            <h1>About Me</h1>
                <div class="img-about">
                <img src={profileImg} alt='avatar of Jennifer'/>
                </div>
                <p>
            I am a Front End Web Developer, visual artist, and (former) art historian.
            I have translated my passion for connecting people with new concepts into a career in web
            development, where I can help clients and customers seamlessly and intuitively interface with
            businesses and sources of information.
                </p>
        </div>
    )
}

export default About
