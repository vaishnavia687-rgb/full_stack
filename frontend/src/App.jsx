
import React from 'react'
import Student from './assets/components/Student'
import { Button } from './components/ui/button'
import Count from './hooks/Count'

const App = () => {
  let name = "test"

  return (
    <>
      <div className="pl-96 text-cyan-300 bg-blue-700">
        App
      </div>

      <Count />

      <Button onClick={() => alert("Default clicked!")}>
        Default
      </Button>

      <Button variant="destructive" onClick={() => alert("Delete clicked!")}>
        Delete
      </Button>

      <Button variant="outline" onClick={() => alert("Outline clicked!")}>
        Outline
      </Button>

      <Button variant="secondary" onClick={() => alert("Secondary clicked!")}>
        Secondary
      </Button>

      <Button variant="ghost" onClick={() => alert("Ghost clicked!")}>
        Ghost
      </Button>

      <h1>This is {name}</h1>

      <Student name="user" age={20} />
    </>
  )
}

export default App
