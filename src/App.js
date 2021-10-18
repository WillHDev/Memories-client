import React from 'react'
import SignUp from './components/Auth/SignUp'
import { Container } from 'react-bootstrap'

export default function App() {
    return (
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
    >
        <SignUp />
    </Container>
       
    )
}
