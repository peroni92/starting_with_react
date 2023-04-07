import React from 'react'
import { useState } from 'react'


export default function Count() {
  const [count, setCount] = useState(0)

  if (count == 9) {
    setCount(0)
  }

  return (
    <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
    </button>
  )
}
