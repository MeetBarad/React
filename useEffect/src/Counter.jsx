import { useEffect,useState } from "react";
function Counter() 
{
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log(`Count value is ${count}`);
    },[count]);
    return (
        <div>
            <p>You Clicked {count} Times</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
export default Counter;