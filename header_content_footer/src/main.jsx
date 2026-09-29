import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Containment'
import Button from './Button'
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
function Withborder(maincomponent)
{
  return function Newcomponent(props)
  {
    return (
      <div style={{border : '60px solid blue'}}>
        {props.name}
        <maincomponent {...props}/>
      </div>
    );
  };
}
const GreetingWithBorder = Withborder(Greeting);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card>
        <h2>Card</h2>
        <p>Card <br/> This is my Content</p>
        <button>Click</button>
      </Card>
      <div>
        <Button text="Click Me" color="blue" onClick={() => alert('Button Clicked!')} />
        <Button text="Submit" color="green" onClick={() => alert('Form Submitted!')} />
      </div>
      <Greeting name="BCA" />
      <GreetingWithBorder name="MCA" />
  </StrictMode>
)
