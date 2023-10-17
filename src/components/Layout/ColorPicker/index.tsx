"use client"

import React, { useState } from "react";
import { Container, Display, Picker } from "./styles";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("#000000");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <Container onClick={() => console.log("clicou")}>
      <Picker type="color" value={color} onChange={handleChange}></Picker>
      <Display color={color}>{color}</Display>
    </Container>
  );
}