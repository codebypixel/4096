import React, { useState, ChangeEvent, useEffect } from "react";
import Navbar from "../components/nav";

const App: React.FC = () => {
  const [matrix, setMatrix] = useState<string[][]>([]);
  const [gridSize, setGridSize] = useState<number>(64);

  useEffect(() => {
    const handlePaste = (event: ClipboardEvent) => {
      const items = event.clipboardData?.items;
      if (items) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].type.indexOf("image") !== -1) {
            const file = items[i].getAsFile();
            if (file) {
              handleImageUpload(file);
              break;
            }
          }
        }
      }
    };

    document.addEventListener("paste", handlePaste);

    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, []);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      const img = new Image();
      img.src = e.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        if (context) {
          canvas.width = img.width;
          canvas.height = img.height;
          context.drawImage(img, 0, 0, img.width, img.height);
          const imageData = context.getImageData(
            0,
            0,
            img.width,
            img.height
          ).data;

          const cellWidth = img.width / gridSize;
          const cellHeight = img.height / gridSize;
          const newMatrix: string[][] = [];

          for (let row = 0; row < gridSize; row++) {
            const matrixRow: string[] = [];
            for (let col = 0; col < gridSize; col++) {
              const startX = Math.floor(col * cellWidth + cellWidth / 2);
              const startY = Math.floor(row * cellHeight + cellHeight / 2);

              const index = (startY * img.width + startX) * 4;
              const r = imageData[index];
              const g = imageData[index + 1];
              const b = imageData[index + 2];
              const color = `#${componentToHex(r)}${componentToHex(
                g
              )}${componentToHex(b)}`;

              matrixRow.push(color);
            }
            newMatrix.push(matrixRow);
          }

          setMatrix(newMatrix);
        }
      };
    };

    reader.readAsDataURL(file);
  };

  const componentToHex = (c: number) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const handleGridSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const size = parseInt(event.target.value, 10);
    setGridSize(size);
  };

  const exportImage = () => {
    const gridSizeString = `${gridSize}x${gridSize}`;
    const colorsString = matrix.map((row) => row.join("")).join("");
    const exportString = `${gridSizeString}-${colorsString}`;

    // Cria um elemento <a> invisível para fazer o download do arquivo
    const link = document.createElement("a");
    link.href = `data:text/plain;charset=utf-8,${encodeURIComponent(
      exportString
    )}`;
    link.download = "export.txt";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="container column">
        <div>
          <Navbar />
        </div>
        <div>
          <button onClick={exportImage}>Exportar Imagem</button>
          <input type="file" onChange={(e) => handleImageUpload(e.target.files?.[0])} />
          <div style={{ margin: "0", display: "flex" }}>
            <label htmlFor="gridSizeInput">Grid Size:</label>
            <input
              type="number"
              id="gridSizeInput"
              value={gridSize}
              onChange={handleGridSizeChange}
              min="1"
              max="512"
            />
          </div>
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
                  backgroundColor: color,
                }}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default App;
