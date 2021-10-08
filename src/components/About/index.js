import React from "react";
import profileImg from "../../assets/cartoonJenn2.jpg";
import './about.css'

function About() {
    return (
        <div className='container-fluid mx-auto' id='about'>
            <row>
                <h1>About Me</h1>
                    <img className='img-about' src={profileImg} alt="avatar of Jennifer" />
                    <p id='about-info'>
                    I am a Full Stack Web Developer with a background in Art & Design and a dedication to life-long learning. I decided to enroll in a coding bootcamp after getting hooked on coding. Effective at combining creativity and problem solving to develop user-friendly applications. My previous experience in the art world provided me with the tools to create and deliver materials that are accessible to all audiences.
                    </p>
            </row>
        </div>
    );
}

export default About;
