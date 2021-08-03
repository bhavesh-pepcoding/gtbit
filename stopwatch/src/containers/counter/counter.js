import { useEffect, useState } from "react";

function Counter() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        console.log("hello");
        return () => {
            console.log("bye bye");
        }
    })
    return (
        <div>
            <h1>{count1 + ", " + count2}</h1>
            <button onClick={() => setCount1(0)}>Reset1</button>
            <button onClick={() => setCount1(count1+1)}>+1</button>
            <button onClick={() => setCount1(count1-1)}>-1</button>
            <button onClick={() => setCount2(0)}>Reset2</button>
            <button onClick={() => setCount2(count2+1)}>+2</button>
            <button onClick={() => setCount2(count2-1)}>-2</button>
        </div>
    )
}

export default Counter;