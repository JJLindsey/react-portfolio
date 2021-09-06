import React from "react";
import profileImg from "../../assets/cartoonJenn2.jpg";

function About() {
    return (
        <div class='container-fluid mx-auto' id='about'>
            <row>
                <h1>About Me</h1>
                    <img class='img-about' src={profileImg} alt="avatar of Jennifer" />
                    <p id='about-info'>
                    I am a Front End Web Developer, visual artist, and (former) art
                    historian. I have translated my passion for connecting people with new
                    concepts into a career in web development, where I can help clients
                    and customers seamlessly and intuitively interface with businesses and
                    sources of information.
                    </p>
            </row>
        </div>
    );
}

export default About;
