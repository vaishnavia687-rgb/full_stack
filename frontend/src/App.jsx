
import React from 'react'
import Student from './assets/components/Student'
import { Button } from './components/ui/button'
import Count from './hooks/Count'
import Register from './hooks/Register'
import Users from './hooks/Users'

const App = () => {
  let name = "test"

  return (
    <>
      <div className="pl-96 text-cyan-300 bg-blue-700">
        App
      </div>

      <Register />

      <Count />

      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>

      <h1>This is {name}</h1>

      <Users />

      <Student name="user" age={20} />
    </>
  )
}

export default App
