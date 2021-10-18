import React from 'react'
import SignUp from './components/Auth/SignUp'
import { Container } from 'react-bootstrap'
import { AuthProvider } from './contexts/Auth-Context'

export default function App() {
    return (
        <AuthProvider>
            <Container
                className="d-flex align-items-center justify-content-center"
                 style={{ minHeight: "100vh" }}
            >
                        <SignUp />
            </Container>
        </AuthProvider>
    )
}
