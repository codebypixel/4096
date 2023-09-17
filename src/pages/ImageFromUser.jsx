import React, { useState } from "react";

const App = () => {
  const [image, setImage] = useState(null);
  const [matrix, setMatrix] = useState([]);
  const [gridSize, setGridSize] = useState(64);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
        const imageData = context.getImageData(0, 0, img.width, img.height).data;

        const cellWidth = img.width / gridSize;
        const cellHeight = img.height / gridSize;
        const newMatrix = [];

        for (let row = 0; row < gridSize; row++) {
          const matrixRow = [];
          for (let col = 0; col < gridSize; col++) {
            const startX = Math.floor(col * cellWidth + cellWidth / 2);
            const startY = Math.floor(row * cellHeight + cellHeight / 2);

            const index = (startY * img.width + startX) * 4;
            const r = imageData[index];
            const g = imageData[index + 1];
            const b = imageData[index + 2];
            const color = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

            matrixRow.push(color);
          }
          newMatrix.push(matrixRow);
        }

        setMatrix(newMatrix);
      };
    };

    reader.readAsDataURL(file);
  };

  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const handleGridSizeChange = (event) => {
    const size = parseInt(event.target.value, 10);
    setGridSize(size);
  };

  
  return (
    <>
      <input type="file" onChange={handleImageUpload} />
      <div style={{ margin: "0", display: "flex" }}>
        <label htmlFor="gridSizeInput">Grid Size:</label>
        <input
          type="number"
          id="gridSizeInput"
          value={gridSize}
          onChange={handleGridSizeChange}
          min="1"
          max="100"
        />
      </div>
      <div
  style={{
    maxWidth: "600px",
    height: "600px",
    display: "grid",
    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
  }}
>
  {matrix.map((row, rowIndex) =>
    row.map((color, colIndex) => (
      <div
        key={`${rowIndex}-${colIndex}`}
        style={{
          width: `${600 / gridSize}px`,
          height: `${600 / gridSize}px`,
          backgroundColor: color
        }}
      />
    ))
  )}
</div>

    </>
  );
};

export default App;
