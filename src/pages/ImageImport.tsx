import React, { useState } from "react";
import Navbar from "../components/nav";

const App: React.FC = () => {
  const [matrix, setMatrix] = useState<string[][]>([]);
  const [gridSize, setGridSize] = useState<number>(64);
  const [importString, setImportString] = useState<string>("");

  const importImage = () => {
    const [gridSizeString, colorsString] = importString.split("-");
    const [importedGridSize] = gridSizeString.split("x");
    const importedMatrix: string[][] = [];

    for (let i = 0; i < colorsString.length; i += 7) {
      const color = colorsString.substr(i + 1, 6); // Ignorar o caractere '#'
      const row = Math.floor(i / (7 * gridSize));
      const col = Math.floor((i % (7 * gridSize)) / 7);

      if (!importedMatrix[row]) {
        importedMatrix[row] = [];
      }

      importedMatrix[row][col] = color;
    }

    setGridSize(parseInt(importedGridSize, 10));
    setMatrix(importedMatrix);
  };

  const handleImportInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImportString(event.target.value);
  };

  const clsInput = () => {
    setImportString("");
    };

  return (
    <>
      <div className="container column">
        <div>
          <Navbar />
        </div>
        <div>
          <input type="text" value={importString} onChange={handleImportInputChange} />
          <button onClick={importImage}>Importar</button>
          <button onClick={clsInput}>Limpar</button>
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
                  backgroundColor: `#${color}`,
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
