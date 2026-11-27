import React from "react";
import { Button } from "../components/ui/button";
import Users from "../hooks/Users";
import Student from "../assets/components/Student";

const Service = () => {
  return (
    <div>
     <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>

      <h1>This is {name}</h1>

      <Users />

      <Student name="user" age={20} />
          
    </div>
  )
}

export default Service
