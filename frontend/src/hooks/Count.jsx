
import React, {useEffect, useState } from 'react'
import { Button } from '../components/ui/button'

const Count = () => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
useEffect(()=>{
  console.log("Form useeffect");
},[]);
  return (
    <div>
      <h3>Count: {count}</h3>

      <Button onClick={() => setCount(count + 1)}>
        Increase
      </Button>

      <Button
        variant="destructive"
        onClick={() => setCount(0)}
      >
        Reset
      </Button>

      <hr />

      <Button
        variant="outline"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Toggle" : "Show Paragraph"}
      </Button>

      {isVisible && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Vel ducimus quaerat, adipisci dolore nulla cum nam
          exercitationem quisquam accusantium neque.
        </p>
      )}
    </div>
  )
}

export default Count

// const Count = () => {
//   const [count, setCount] = useState(0)

//   const increase = () => {
//     setCount(count + 1)
//   }

//   return (
//     <div>
//       <h2>Count: {count}</h2>

//       <Button onClick={increase}>
//         Increase
//       </Button>
//     </div>
//   )
// }

// export default Count
