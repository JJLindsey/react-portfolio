import React from 'react'
//import { Form, Button, Container } from 'react-bootstrap'
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
        
        // <Container>
        //     <div className='contact'>
        //         <h1 className='text-center'> Contact Me </h1>
        //         <row>
        //         <Form id='contact-info' onSubmit={handleSubmit}>
        //             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        //                 <Form.Label>Name</Form.Label>
        //                 <Form.Control type="text" name="name" placeholder="name" defaultValue={name} onBlur={handleChange} />
        //             </Form.Group>
        //             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        //                 <Form.Label>Email Address</Form.Label>
        //                 <Form.Control type="email" name="email" placeholder="name@example.com" defaultValue={email} onBlur={handleChange} />
        //             </Form.Group>
        //             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        //                 <Form.Label>Message</Form.Label>
        //                 <Form.Control as="textarea" name="message" rows={3} defaultValue={message} onBlur={handleChange} />
        //             </Form.Group>
        //             <Button variant="secondary" type="submit">
        //                 Submit
        //             </Button>
        //         </Form>
        //         </row>
        //     </div>
        // </Container>
            <div class="container px-4 py-5" id="featured-3">
                <h4 class="pb-2 border-bottom">Get in Touch</h4>
                <div class="row py-5 row-cols-1 row-cols-sm-3">
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
            </div>
        </div>
    )
}

export default Contact
