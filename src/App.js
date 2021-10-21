import React, { useEffect } from 'react'
import SignUp from './components/Auth/SignUp'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AuthProvider } from './contexts/Auth-Context'
import { getTasks } from './actions/tasks'
import  Tasks  from './components/Tasks/Tasks'

export default function App() {

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getTasks());
    }, [dispatch]);
    
    return (
        <AuthProvider>
            <Container
                className="d-flex align-items-center justify-content-center"
                 style={{ minHeight: "100vh" }}
            >
                        <Tasks />
                        <SignUp />
            </Container>
        </AuthProvider>
    )
}
