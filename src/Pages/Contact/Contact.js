import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-login ">
            <div className="contact-form mt-5 mx-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div className="contact-img">
                <img src="https://thumbs.dreamstime.com/b/contact-us-concept-wooden-blocks-email-mail-telephone-icons-website-page-contact-us-e-mail-marketing-contact-us-192902959.jpg" alt="" />
            </div>
        </div>
    );
};

export default Contact;
