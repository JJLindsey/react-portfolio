import React from 'react'
import { Card, Container } from 'react-bootstrap'
//import { validateEmail } from '../../utils/helpers'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsEnvelope } from 'react-icons/bs'
import './contact.css'

function Contact() {
    // const [formState, setformState] = useState({ name: '', email: '', message: '' })

    // const [errorMessage, setErrorMessage] = useState('')
    // const { name, email, message } = formState

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!errorMessage) {
    //         setformState({ [e.target.name]: e.target.value });
    //         console.log('Form', formState)
    //     }
    // }

    // const handleChange = (e) => {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid.');
    //         } else {
    //             setErrorMessage('');
    //         }
    //     } else {
    //         if (!e.target.value.length) {
    //             setErrorMessage(`${e.target.name} is required.`);
    //         } else {
    //             setErrorMessage('');
    //         }
    //     }
    // }
    return (
        
        <Container className="contact" fluid>
            <Card className="contact-card mx-auto py-5 text-center text-white">
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    <div class="feature col">
                        <div class="feature-icon bg-gradient">
                        <a href='https://github.com/JJLindsey' target='_blank' rel='noopener noreferrer' alt='GitHub profile link'>
                            <FaGithub/>
                            </a>
                        </div>
                        <h4>GitHub</h4> 
                    </div>
                    <div class="feature col">
                        <div class="feature-icon bg-gradient">
                        <a href='https://www.linkedin.com/in/jennifer-lindsey010' target='_blank' rel='noopener noreferrer' alt='Linked In profile link'>
                            <FaLinkedinIn/>
                        </a>
                        </div>
                        <h4>Connect with me</h4>
                    </div>
                    <div class="feature col">
                        <div class="feature-icon bg-gradient">
                            <a href='mailto:jlindsey010@gmail.com' target='_blank' rel='noopener noreferrer' alt='email link'>
                            <BsEnvelope/>
                        </a>
                        </div>
                        <h4>Send me a message</h4>
                    </div>
                    </Card.Text>
                </Card.Body>
                </Card>
        </Container> 
        //     <div class="container px-4 py-5" id="featured-3">
        //         <h4 class="pb-2 border-bottom">Get in Touch</h4>
        //         <div class="row py-5 row-cols-1 row-cols-sm-3">
        //             <div class="feature col">
        //                 <div class="feature-icon bg-gradient">
        //                     <a href='https://github.com/JJLindsey' target='_blank' rel='noopener noreferrer' alt='GitHub profile link'>
        //                     <FaGithub/>
        //                     </a>
        //                 </div>
        //                 <h4>GitHub</h4> 
        //             </div>
        //             <div class="feature col">
        //                 <div class="feature-icon bg-gradient">
        //                 <a href='https://www.linkedin.com/in/jennifer-lindsey010' target='_blank' rel='noopener noreferrer' alt='Linked In profile link'>
        //                     <FaLinkedinIn/>
        //                 </a>
        //                 </div>
        //                 <h4>Connect with me</h4>
        //             </div>
        //             <div class="feature col">
        //                 <div class="feature-icon bg-gradient">
        //                     <a href='mailto:jlindsey010@gmail.com' target='_blank' rel='noopener noreferrer' alt='email link'>
        //                         <BsEnvelope/>
        //                     </a>
        //                 </div>
        //                 <h4>Send me a message</h4>
        //             </div>
        //     </div>
        // </div>
    )
}

export default Contact
