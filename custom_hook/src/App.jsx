
import useToggle from './useToggle'

function App() {
  const [isOn, toggle] = useToggle();

  return (
    <>
      <h1>Custom Hook</h1>
      <h1>Status: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>{isOn ? "Turn Off" : "Turn On"}</button>
    </>
  )
}

export default App
