import './App.css';
 import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
    setError("");
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
    setError("");
  };

  function plus(){
    if(num1!=="" || num2!==""){
      setResult(parseFloat(num1) + parseFloat(num2));
      console.log(result);

    }
    else{
      setError("Error :  Num1  no Num2 cannot be empty")
    }
  }

  function minus(){
    if(num1!=="" || num2!==""){
      setResult(parseFloat(num1) - parseFloat(num2));
      console.log(result);
      
    }
    else{
      setError("Error :  Num1  no Num2 cannot be empty")
    }
  }

  function multiply(){
    if(num1!=="" || num2!==""){
      setResult(parseFloat(num1) * parseFloat(num2));
      console.log(result);
      
    }
    else{
      setError("Error :  Num1  no Num2 cannot be empty")
    }
  }

  function devide(){
    if(num1!=="" || num2!==""){
      setResult(parseFloat(num1) / parseFloat(num2));
      console.log(result);
      
    }
    else{
      setError("Error :  Num1 or Num2 cannot be empty")
    }
  }

  return (
    <div className="app">
      <h1>React Calculator</h1>
      <div>
        <input type="text" value={num1} onChange={handleNum1Change} />
        <br></br>
        <br></br>
        <input type="text" value={num2} onChange={handleNum2Change} />
      </div>
      <br></br>
      <div className='btn'>
        <button value="+" onClick={plus}>
          +
        </button>
        <button value="-" onClick={minus}>
          -
        </button>
        <button value="*" onClick={multiply}>
          *
        </button>
        <button value="/" onClick={devide}>
          /
        </button>
      </div>
      <br></br>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {result && (
        <div style={{ color: "green" }}>
          Result: {result}
        </div>
      )}
     
    </div>
  );
}

export default App;
