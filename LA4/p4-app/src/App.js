import React, { useState } from "react";

function App() {
  const [m1, setM1] = useState("");
  const [m2, setM2] = useState("");
  const [m3, setM3] = useState("");
  const [grade, setGrade] = useState("");

  const box = {
    width: "260px",
    margin: "40px auto",
    padding: "50px",
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

  const calculate = () => {
    const avg = (Number(m1) + Number(m2) + Number(m3)) / 3;

    if (avg >= 90) setGrade("A");
    else if (avg >= 75) setGrade("B");
    else setGrade("C");
  };

  return (
    <div style={box}>
      <h2>Grade Calculator</h2>

      <input placeholder="Mark 1" style={input} onChange={(e) => setM1(e.target.value)} />
      <input placeholder="Mark 2" style={input} onChange={(e) => setM2(e.target.value)} />
      <input placeholder="Mark 3" style={input} onChange={(e) => setM3(e.target.value)} />

      <button style={button} onClick={calculate}>Calculate</button>

      <h3>Grade: {grade}</h3>

      <p style={{ position: "fixed", bottom: "10px", left: "10px", fontSize: "12px" }}>
        Name: Gauravsingh Rajpurohit <br />
        Reg No: 24BCE2208
      </p>
    </div>
  );
}

export default App;