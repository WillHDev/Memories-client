import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/Auth-Context"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const [ loading, setLoading ] = useState(false)
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout(e) {
    e.preventDefault()
    setError("")

    try {
        setLoading(true)
      await logout()
      history.push("/login")
    } catch(error) {
        console.log(error)
      setError("Failed to log out")
    }
    setLoading(false)
  }

  return (
    <>
      <Card>
          { currentUser && 
           <Card.Body>
           <h2 className="text-center mb-4">Profile</h2>
           {error && <Alert variant="danger">{error}</Alert>}
           <strong>Email:</strong> {currentUser.email}
           <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
             Update Profile
           </Link>
         </Card.Body>
         }
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}