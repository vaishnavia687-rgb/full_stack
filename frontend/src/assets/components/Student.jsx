import React from 'react'

const Student = ({ name, age }) => {
  return (
    <>
      <h2>I am {name}</h2>
      <h3>My age is {age}</h3>
    </>
  )
}

export default Student