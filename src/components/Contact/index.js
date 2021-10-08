import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { validateEmail } from '../../utils/helpers'
import './contact.css'

function Contact(props) {
    const [formState, setformState] = useState({ name: '', email: '', message: '' })

    const [errorMessage, setErrorMessage] = useState('')
    const { name, email, message } = formState

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setformState({ [e.target.name]: e.target.value });
            console.log('Form', formState)
        }
    }

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    }
    return (
        
        <Container>
            <div className='contact'>
                <h1 className='text-center'> Contact Me </h1>
                <row>
                <Form id='contact-info' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="name" defaultValue={name} onBlur={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="name@example.com" defaultValue={email} onBlur={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" name="message" rows={3} defaultValue={message} onBlur={handleChange} />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                </Form>
                </row>
            </div>
        </Container>
    )
}

export default Contact
