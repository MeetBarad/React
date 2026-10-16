import { useState } from 'react'
import './App.css'

function Rec({ render }) {
  {
    let data = "Render Props in React";
    return render(data);
  }
}
function App() {
  

  return (
    <>
      <Rec render={(data) => <h1>{data}</h1>} />
    </>
  )
}

export default App
