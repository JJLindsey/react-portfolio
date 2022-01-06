import React from "react";
import { Button,Container,Row } from "react-bootstrap";
import profileImg from "../assets/cartoonJenn2.jpg";
import './about.css'
import iconNode from '../assets/images/node.png'
import iconReact from '../assets/images/react.png'
import iconMongo from '../assets/images/mongo.png'
import icongraph from '../assets/images/graphql.png'
import resume from '../assets/JLindsey SE.pdf'

function About() {
    return (
        <Container className='container-fluid' id='about-info'>
            <div class="row featurette">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading text-muted">About Me 
                    </h2>
                    <hr class="featurette-divider"/>
                    <Row className='align-items-center'>
                        <div className='icons'>
                            <img id='icon' src={iconNode} alt='node icon'/>
                            <img id='icon' src={iconReact} alt='node icon'/>
                            <img id='icon' src={iconMongo} alt='node icon'/>
                            <img id='icon' src={icongraph} alt='node icon'/>
                        </div> 
                    </Row>
                    <p class="about-text">I am a Full Stack Web Developer with a background in Art & Design and a dedication to life-long learning. I decided to enroll in a coding bootcamp after getting hooked on coding. Effective at combining creativity and problem solving to develop user-friendly applications. My previous experience in art provides me with the tools to create and deliver materials that are accessible to all audiences.</p>
                </div>
                <div class="col-md-5 order-md-1">
                    <img id='img-about' src={profileImg} className="featurette-image img-fluid" aria-label="profile" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                </div>
            </div>
            <Button a href={resume} download='JenniferLindseyDev.pdf' className="btn btn-secondary btn-lg">
                Download Resume
            </Button>
        </Container>
    );
}

export default About;
