
import './App.css'

function App() {
  function Parent()
  {
    const handleMessage = (message) => {
      alert(message);
    }
    return ( <Child sendData={handleMessage} /> )
      
  }
  function Child({sendData})
  {
    return (
      <div>
        <button onClick={() => sendData("Hello from Child!")}>Send Message</button>
      </div>
    )
  }
  return (
    <>
      <Parent />
    </>
  )
}

export default App
