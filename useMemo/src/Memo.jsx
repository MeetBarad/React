
import { useState, useMemo } from "react";

function Memo() {
    const [number, setNumber] = useState([10, 20, 30, 40]);
    const [count, setCount] = useState(0);

    const maxNumber = useMemo(() => {
        console.log("Finding highest number...");
        return Math.max(...number);
    }, [number]);

    return (
        <div style={{ padding: "20px" }}>
            <h2>React Performance Optimization</h2>

            <p>Number: {number.join(", ")}</p>
            <p>Highest Number: {maxNumber}</p>

            <button onClick={() => setNumber([...number, 50])}>
                Add 50
            </button>

            <p>Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>
                Increment Count
            </button>
        </div>
    );
}

export default Memo;
