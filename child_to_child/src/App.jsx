import React, { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  function First() {
    return <button onClick={() => setMsg("Child To Child Component!")}>Send</button>;
  }

  function Second() {
    return <h3>{msg}</h3>;
  }

  return (
    <div>
      <h2>First Sibling</h2>
      <First />

      <h2>Second Sibling</h2>
      <Second />
    </div>
  );
}

export default App;