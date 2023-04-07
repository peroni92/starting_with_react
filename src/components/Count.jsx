import React from 'react'
import { useState } from 'react'


export default function Count() {
    const [count, setCount] = useState(0)
    
    const addCount = () => setCount((count) => count + 1)
    const resetCount = () => setCount(0)

    return (
        <>
            <button onClick={addCount}>
                count is {count}
            </button>

            <button onClick={resetCount}>Reset</button>
        </>
    )
}
