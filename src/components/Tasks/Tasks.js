import React from 'react'
import { useSelector } from 'react-redux';
import Task from './Task/Task_'
import { Container, Row, Col } from 'react-bootstrap'

export default function Tasks({ currentId, setCurrentId}) {
    const tasks = useSelector( (state) => state.tasks);
    console.log(tasks)
   if ( !tasks ){
        return <h3>Loading...</h3>
   } 
    return (
        <Container>
                         <h1>Tasks</h1>
           <Row>
           {tasks.map( task => (
               <Col key={task._id}> <Task task={task} setCurrentId={setCurrentId} currentId={currentId}  /></Col>
           ))}
</Row>

        </Container>
           
    )
}
