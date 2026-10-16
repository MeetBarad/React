import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const handleSubmit = () => {
    if (value.trim() !== "") {
      setList([
        ...list,
        { text: value, checked: false }
      ]);
      setValue("");
    }
  };

  const handleCheck = (index) => {
    const newList = [...list];
    newList[index].checked = !newList[index].checked;
    setList(newList);
    setCount(newList.filter((item) => item.checked).length);
  };

  return (
    <div>
      <h2>My Task List</h2>

      <input
        type="text"
        value={value}
        placeholder="Enter value"
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      {list.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheck(index)}
          />
            {item.text}
        </div>
      ))}
      <h2>Complete Tasks: {count}</h2>
    </div>
  );
}

export default App;