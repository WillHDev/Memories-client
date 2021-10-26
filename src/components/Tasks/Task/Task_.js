import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

export default function Task_({ task, setCurrentId, currentId }) {
  const history = useHistory();
//   const task = {
  
//     title: "Enhance Mobile Features",
//     description: "Customer has requested we add a chat feature to the mobile website ",
//     tags: "Elliot DDS website",
//     assignedTo: "Jim and Dave",
//     creator: "Bradley"

// }

    return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{task.title}</Card.Title>
            <Card.Text>
               {task.description}
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">{task.assignedTo}</Card.Subtitle>
              <Button onClick={() => {
setCurrentId(task._id)
  history.push('/newTask');

              } }>Edit</Button>
              <Card.Link href="#">Delete</Card.Link>
          </Card.Body>
        </Card>
      
    )
}
