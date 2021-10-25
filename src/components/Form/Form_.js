import React, { useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { createTask } from '../../actions/tasks'

export default function Form_({ currentId, setCurrentId }) {

const [ form, setForm ] = useState({ 
    title: '', description: '', assignedTo: '', tags: '', creator: 'Lionel' })
const [ loading, setLoading ] = useState(false)
const [ error, setError ] = useState('')
const dispatch = useDispatch()

const handleChange = (e) =>{
    const { name, value }  = e.target;
       
        setForm({ 
            ...form,
            [name]: value
         });
         console.log(form);
}

//assignedTo: form.assignedTo.split(" ")
//TODO add/subtract seterror and loading
    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        dispatch(createTask(form))
        setLoading(false)
    }

  
    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">New Task</h2>
           { error && <Alert variant="danger">{error}</Alert> }
                <Form onSubmit={handleSubmit}>
                <Form.Group id="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control as="textarea" rows={1} value={form.title} name="title" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group id="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} value={form.description} name="description" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group id="assignedTo">
                        <Form.Label>Assign to</Form.Label>
                        <Form.Control as="textarea" rows={3} value={form.assignedTo} name="assignedTo" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group id="tags">
                        <Form.Label>Tags</Form.Label>
                        <Form.Control as="textarea" rows={3} value={form.tags} name="tags" onChange={handleChange} />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">Submit</Button>
                </Form>
            </Card.Body>
        </Card>
    
    </>
    )
}
