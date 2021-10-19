import React from 'react'
import SignUp from './components/Auth/SignUp'
import Login from './components/Auth/Login'
import { Container } from 'react-bootstrap'
import { AuthProvider } from './contexts/Auth-Context'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';

export default function App() {
    return (
        <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
         >
        <Router>
            <AuthProvider>
                <Switch> 
                    <Route exact path="/" component={Dashboard} />
                   <Route path="/signup" component={SignUp} />
                   <Route path="/login" component={Login} />
                 </Switch>
             </AuthProvider>
        </Router>
        </Container>
    )
}


