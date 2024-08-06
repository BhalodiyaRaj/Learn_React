import { useState } from 'react';
import './App.css';
import Result from './components/Result';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [number, setNumber] = useState(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    const num = Number(inputValue);
    if (!isNaN(num)) {
      setNumber(num);
    } else {
      alert('Please enter a valid number');
    }
  };

  return (
    <div>
      <h1>Counter with Props</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <button onClick={handleClick}>Print</button>
      {number !== null && <Result numbers={number} />}
    </div>
  );
}

export default App;
