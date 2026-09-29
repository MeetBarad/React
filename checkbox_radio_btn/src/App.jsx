
import { useState } from 'react';
import './App.css';

function App() {
  const [hobbies, setHobbies] = useState([]);
  const [color, setColor] = useState('');

  const LoginApplication = (e) => {
    e.preventDefault();

    console.log("Hobbies: ", hobbies);
    console.log("Color: ", color);

  };
  const handlehobbies = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setHobbies((prev) => [...prev, value]);
    } else {
      setHobbies((prev) => prev.filter((hobby) => hobby !== value));
    }
  };

  return (

        <form onSubmit={LoginApplication}>
        
        <label>Hobbies</label><br/>
        <input type="checkbox" 
        value="Dance"
        onChange={handlehobbies}>
        </input>
        <label>Dance</label>
        <br/>
        <input type="checkbox" 
        value="Music"
        onChange={handlehobbies}>
        </input>
        <label>Music</label>
        <br/>
        <input type="checkbox" 
        value="Reading"
        onChange={handlehobbies}>
        </input>
        <label>Reading</label>
        <br/>

        <label>Color</label><br/>
        <input type='radio' 
        value="Red"
        name="color"
        onChange={(e)=>setColor(e.target.value)}>
        </input>
        <label>Red</label>
        <br/>

        <input type='radio' 
        value="Blue"
        name="color"
        onChange={(e)=>setColor(e.target.value)}>
        </input>
        <label>Blue</label>
        <br/>

        <input type='radio' 
        value="Green"
        name="color"
        onChange={(e)=>setColor(e.target.value)}>
        </input>
        <label>Green</label>
        <br/>

        <button type='submit'>Submit</button>
        
        
        </form>
  );
}

export default App;

