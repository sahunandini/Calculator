import React, { useState } from 'react';
import './App.css';


function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [secondErrorMessage, setSecondErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 

  
  const add = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) && isNaN(num2)) {
      setErrorMessage('Error!');
      setSecondErrorMessage('Num1 and Num2 Cannot Be Empty');
      setSuccessMessage('');
      setResult('');
    }
    else if (isNaN(num2)) {
      setErrorMessage('Error!');
      setSecondErrorMessage('Num2 Cannot Be Empty');
      setSuccessMessage('');
      setResult('');
    }
    else if (isNaN(num1)) {
      setErrorMessage('Error!');
      setSecondErrorMessage('Num1 Cannot Be Empty');
      setSuccessMessage('');
      setResult('');
    } else {
      const sum = num1 + num2;
      setResult(sum);
      setErrorMessage('');
      setSecondErrorMessage('');
      setSuccessMessage('Addition Successful!');
    }
  };

  const subtract = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
  
    if (isNaN(num1) && isNaN(num2)) {
      setErrorMessage('Error!');
      setSecondErrorMessage('Num1 and Num2 Cannot Be Empty');
      setSuccessMessage('');
      setResult('');
    }
    else if (isNaN(num2)) {
      setErrorMessage('Error!');
      setSecondErrorMessage('Num2 Cannot Be Empty');
      setSuccessMessage('');
      setResult('');
    }
    else if (isNaN(num1)) {
      setErrorMessage('Error!');
      setSecondErrorMessage('Num1 Cannot Be Empty');
      setSuccessMessage('');
      setResult('');
    } else {
      const difference = num1 - num2;
      setResult(difference);
      setErrorMessage('');
      setSecondErrorMessage('');
      setSuccessMessage('Subtraction Successful!');
    }
  };
  
  const multiply = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
  
    if (isNaN(num1) && isNaN(num2)) {
      setErrorMessage('Error!');
      setSecondErrorMessage('Num1 and Num2 Cannot Be Empty');
      setSuccessMessage('');
      setResult('');
    }
    else if (isNaN(num2)) {
      setErrorMessage('Error!');
      setSecondErrorMessage('Num2 Cannot Be Empty');
      setSuccessMessage('');
      setResult('');
    }
    else if (isNaN(num1)) {
      setErrorMessage('Error!');
      setSecondErrorMessage('Num1 Cannot Be Empty');
      setSuccessMessage('');
      setResult('');
    } else {
      const product = num1 * num2;
      setResult(product);
      setErrorMessage('');
      setSecondErrorMessage('');
      setSuccessMessage('Multiplication Successful!');
    }
  };
  
  const divide = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
  
    if (isNaN(num1) && isNaN(num2)) {
      setErrorMessage('Error!');
      setSecondErrorMessage('Num1 and Num2 Cannot Be Empty');
      setSuccessMessage('');
      setResult('');
    }
    else if (isNaN(num2)) {
      setErrorMessage('Error!');
      setSecondErrorMessage('Num2 Cannot Be Empty');
      setSuccessMessage('');
      setResult('');
    }
    else if (isNaN(num1)) {
      setErrorMessage('Error!');
      setSecondErrorMessage('Num1 Cannot Be Empty');
      setSuccessMessage('');
      setResult('');
    } else {
      const quotient = num1 / num2;
      setResult(quotient);
      setErrorMessage('');
      setSecondErrorMessage('');
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
        <button className='multi' onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {secondErrorMessage && <p className="secondError">{secondErrorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      {result && <p className="result">Result: {result}</p>}
    </div>
  );
}

export default App;
