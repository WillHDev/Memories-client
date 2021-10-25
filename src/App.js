import React, { useEffect } from 'react'
import SignUp from './components/Auth/SignUp'
import Login from './components/Auth/Login'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AuthProvider } from './contexts/Auth-Context'
import { getTasks } from './actions/tasks'
import  Tasks  from './components/Tasks/Tasks'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//import Dashboard from './components/Dashboard/Dashboard';
import Form_ from './components/Form/Form_'
export default function App() {

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getTasks());
    }, [dispatch]);
    
    return (
        <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
         >
        <Router>
            <AuthProvider>
                <Switch> 
                    <Route exact path="/" component={Tasks} />
                   <Route path="/signup" component={SignUp} />
                   <Route path="/login" component={Login} />
                 </Switch>
             </AuthProvider>
        </Router>
        </Container>
    )
}

// 
