import React, { useState } from "react";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

function App() {
  const images = [image1, image2, image3];

  const [selected, setSelected] = useState(images[0]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Image Gallery</h1>

      <img src={selected} alt="preview" width="200" />

      <div>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumb"
            width="100"
            onClick={() => setSelected(img)}
          />
        ))}
      </div>
      <p style={{ position: "fixed", bottom: "10px", left: "10px", fontSize: "12px" }}>
        Name: Gauravsingh Rajpurohit <br />
        Reg No: 24BCE2208
      </p>
    </div>
  );
}

export default App;