import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const container = {
    width: "260px",
    margin: "40px auto",
    padding: "30px",
    border: "1px solid #333",
    borderRadius: "6px"
  };

  const input = {
    width: "100%",
    margin: "6px 0",
    padding: "6px"
  };

  const button = {
    margin: "5px 5px 5px 0",
    padding: "6px 10px"
  };

  return (
    <div style={container}>
      <h2>Calculator</h2>

      <input
        type="number"
        style={input}
        placeholder="First number"
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        style={input}
        placeholder="Second number"
        onChange={(e) => setNum2(e.target.value)}
      />

      <button
        style={button}
        onClick={() => setResult(Number(num1) + Number(num2))}
      >
        Add
      </button>

      <button
        style={button}
        onClick={() => setResult(Number(num1) - Number(num2))}
      >
        Subtract
      </button>

      <h3>Result: {result}</h3>
      <p style={{ position: "fixed", bottom: "10px", left: "10px", fontSize: "12px" }}>
        Name: Gauravsingh Rajpurohit <br />
        Reg No: 24BCE2208
      </p>
    </div>
  );
}

export default App;