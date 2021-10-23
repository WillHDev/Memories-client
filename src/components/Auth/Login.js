import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/Auth-Context'
import { Link, useHistory } from 'react-router-dom';
//import useAsync from '../../hooks/Use-Async'


export default function Login() {
    
const emailRef =  useRef();
const passwordRef = useRef();

//WHY is signup destructured
//currenUser used for testing from useAuth
const { login } = useAuth();
const [ error, setError ] = useState();
const [ loading, setLoading ] = useState(false);
const history= useHistory();

//WHY isnt this an arrow function?
async function handleSubmit (e)  {
    e.preventDefault();
   
    try {
        setError('');
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        setLoading(false);
        history.push("/")
    } catch(error) {
        console.log(error);
        setError('Failed to log in')
        setLoading(false);
    }
    setLoading(false);
}

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form  onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email
                                <Form.Control type="email" ref= {emailRef} required />
                            </Form.Label>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Email
                                <Form.Control type="password" ref= {passwordRef} required />
                            </Form.Label>
                        </Form.Group>
                      
                        <Button  type="submit" disabled={loading}>Log In</Button>
                    </Form>
                </Card.Body>
        
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup" >Sign Up</Link>
            </div>
            </Card>
        </>
    )
}
