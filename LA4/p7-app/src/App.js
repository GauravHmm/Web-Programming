import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const box = {
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
    margin: "5px",
    padding: "6px 10px"
  };

  const searchBooks = async () => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
    const data = await res.json();
    setBooks(data.items || []);
  };

  return (
    <div style={box}>
      <h2>Book Explorer</h2>

      <input
        style={input}
        placeholder="Search book"
        onChange={(e) => setQuery(e.target.value)}
      />

      <button style={button} onClick={searchBooks}>Search</button>

      {books.map((b, i) => (
        <p key={i}>{b.volumeInfo.title}</p>
      ))}

      <p style={{ position: "fixed", bottom: "10px", left: "10px", fontSize: "12px" }}>
        Name: Gauravsingh Rajpurohit <br />
        Reg No: 24BCE2208
      </p>
    </div>
  );
}

export default App;