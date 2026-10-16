
import './App.css'

function App() {
  function Parent()
  {
    const handleClick = () => {
      alert('Button clicked!');
    };
    return (
      <Child onClick={handleClick} />
    )
      
  }
  function Child({onClick})
  {
    return (
      <button onClick={onClick}>Click me</button>
    ) 
  }
  return (
    <>
      <Parent />
    </>
  )
}

export default App
