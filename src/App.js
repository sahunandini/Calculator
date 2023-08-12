import React, { useState } from 'react';
import './App.css';


function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 

  
  const add = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setErrorMessage('Please enter valid numbers.');
      setSuccessMessage('');
      setResult('');
    } else {
      const sum = num1 + num2;
      setResult(sum);
      setErrorMessage('');
      setSuccessMessage('Addition Successful!');
    }
  };

  const subtract = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
  
    if (isNaN(num1) || isNaN(num2)) {
      setErrorMessage('Please enter valid numbers.');
      setSuccessMessage('');
      setResult('');
    } else {
      const difference = num1 - num2;
      setResult(difference);
      setErrorMessage('');
      setSuccessMessage('Subtraction Successful!');
    }
  };
  
  const multiply = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
  
    if (isNaN(num1) || isNaN(num2)) {
      setErrorMessage('Please enter valid numbers.');
      setSuccessMessage('');
      setResult('');
    } else {
      const product = num1 * num2;
      setResult(product);
      setErrorMessage('');
      setSuccessMessage('Multiplication Successful!');
    }
  };
  
  const divide = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
  
    if (isNaN(num1) || isNaN(num2) || num2 === 0) {
      setErrorMessage('Please enter valid numbers and ensure the divisor is not zero.');
      setSuccessMessage('');
      setResult('');
    } else {
      const quotient = num1 / num2;
      setResult(quotient);
      setErrorMessage('');
      setSuccessMessage('Division Successful!');
    }
  };
  

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Num 1"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Num 2"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
      <div className="buttons">
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      {result && <p className="result">Result: {result}</p>}
    </div>
  );
}

export default App;
